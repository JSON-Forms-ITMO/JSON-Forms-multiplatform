plugins {
    kotlin("jvm")
    id("org.jetbrains.intellij") version "1.17.2"
}

group = "ru.itmo.json-forms"
version = "unspecified"

repositories {
    mavenCentral()
}

intellij {
    pluginName = "JSON-Forms"
    version = "2022.3.3"
    type = "IC"

    // Plugin Dependencies. Uses `platformPlugins` property from the gradle.properties file.
    // plugins = properties("platformPlugins").map { it.split(',').map(String::trim).filter(String::isNotEmpty) }
}

dependencies {
    testImplementation("org.jetbrains.kotlin:kotlin-test")
}

tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(17)
}
