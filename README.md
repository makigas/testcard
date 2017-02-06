# HTML5 Testcard

**[See demo](https://makigas.github.io/testcard)**

Just a webpage that renders a testcard with a clock pattern. I use it on my
livestreams while I'm setting up before starting. You can give it a try using
the public website.

![Test card on its regular form](doc/card.png)

## Usage

The most basic form is just accessing the index.html file. However, by using the
`banner` param in the URL querystring a fixed text can be displayed on the top
half of the screen. Example:

![Test card with a parameter](doc/banner.png)

## Using with OBS

You can attach webpages as sources in OBS livestreams by installing the
Browsersource plugin. Please, download the plugin for your platform first:

* [CLR Browsersource for OBS for Windows][bswin].
* [Browser Plugin for OBS Multiplatform][bsobs].

Add the public page as the website to display. Make sure the testcard fills
the entire screen. Set the URL to the testcard one, change the `banner` param
if you want; now you are ready to rock.

## License

The theme is available as open source under the terms of the
[MIT License](http://opensource.org/licenses/MIT). See LICENSE.txt for the
full contents of the license.

[bswin]: https://obsproject.com/forum/resources/clr-browser-source-plugin.22/
[bsobs]: https://obsproject.com/forum/resources/browser-plugin.115/