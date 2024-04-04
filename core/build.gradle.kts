import org.jetbrains.kotlin.gradle.targets.js.yarn.YarnPlugin
import org.jetbrains.kotlin.gradle.targets.js.yarn.YarnRootExtension

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    kotlin("plugin.serialization") version "1.9.22"
    id("dev.petuska.npm.publish") version "3.4.1"
}

repositories {
    mavenCentral()
    maven("https://dl.bintray.com/kotlin/kotlinx/")
}

rootProject.plugins.withType<YarnPlugin>().configureEach {
    rootProject.extensions.getByType<YarnRootExtension>().lockFileName = "yarn.lock"
}

kotlin {
    jvmToolchain(17)
    jvm()
    js(IR) {
        generateTypeScriptDefinitions()
        nodejs()

        binaries.library()
    }

    sourceSets {
        commonMain.dependencies {
            implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.3")
        }
        jsMain.dependencies {
            implementation(npm("format-util", "1.0.5", generateExternals = true))
        }
        all {
            languageSettings {
                optIn("kotlin.js.ExperimentalJsExport")
            }
        }
    }
}
