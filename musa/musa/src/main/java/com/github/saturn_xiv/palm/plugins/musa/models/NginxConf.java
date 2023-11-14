package com.github.saturn_xiv.palm.plugins.musa.models;

import java.io.Serializable;

public record NginxConf(String domain, int port) implements Serializable {
}
