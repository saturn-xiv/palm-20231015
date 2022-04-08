# palm

A total free education &amp; translation &amp; ops solution.

## Notes

- install dejavu fonts

  ```bash
  # for centos
  sudo yum install dejavu-sans-fonts
  # for archlinux
  sudo pacman -S ttf-dejavu
  # for ubuntu
  sudo apt install ttf-dejavu
  # for alpine
  sudo apk add ttf-dejavu
  ```

- Generate a random secret key: `openssl rand -base64 32`
- Generate a random password: `pwgen 32 1`
- mysql

  ```sql
  CREATE USER 'www'@'localhost' IDENTIFIED BY '123456';
  CREATE DATABASE palm CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  GRANT ALL PRIVILEGES ON palm.* TO 'www'@'localhost';
  FLUSH PRIVILEGES;
  # fix caching_sha2_password could not be loaded
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'change-me'
  ```

## Documents

- [Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install)
- [keep a changelog](https://keepachangelog.com/en/1.0.0/)
- [Semantic Versioning 2.0.0](https://semver.org/)
- [What's New in Globalization and Localization](<https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/dd997383(v=vs.100)?redirectedfrom=MSDN>)
- [ISO 4217 CURRENCY CODES](https://www.iso.org/iso-4217-currency-codes.html)
- [BCP 47](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
- [National Address Database (NAD) Disclaimer](https://www.transportation.gov/gis/national-address-database/national-address-database-nad-disclaimer)
- [Web Tools API Portal](https://www.usps.com/business/web-tools-apis/)
- [Reviewing address formats](https://help.shopify.com/en/manual/shipping/shopify-shipping/reviewing-address-formats)
- [handlebars](https://handlebarsjs.com/guide/)
- [Versioning gRPC services](https://docs.microsoft.com/en-us/aspnet/core/grpc/versioning?view=aspnetcore-6.0)

### UI

- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/web)
- [MUI](https://mui.com/getting-started/installation/)
- [Google Fonts](https://developers.google.com/fonts/docs/material_icons#setup_method_2_self_hosting)

### Token

- [Sign in with App Passwords](https://support.google.com/accounts/answer/185833?hl=en)
- [Casbin is a powerful and efficient open-source access control library](https://casbin.org/docs/en/overview)

### Credits

- [Joomla! is a free and open-source content management system (CMS) for publishing web content.](https://www.joomla.org)
- [FluxBB is fast, light, user-friendly forum software for your website.](https://fluxbb.org/docs/v1.5/installing)
- [OpenCart is an open source PHP-based online e-commerce solution.](https://docs.opencart.com/en-gb/introduction/)
