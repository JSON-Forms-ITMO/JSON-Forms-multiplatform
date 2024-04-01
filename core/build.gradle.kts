plugins {
    alias(libs.plugins.kotlinMultiplatform)
    kotlin("plugin.serialization") version "1.9.22"
}

kotlin {
    jvm("jvm")
    
    sourceSets {
        commonMain.dependencies {
        }
    }
}
