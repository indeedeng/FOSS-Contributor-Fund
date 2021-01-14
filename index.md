---
layout: default
title: Starfish
exclude_toc: true
---
<img src="{{ site.baseurl }}/images/Indeed_OS_starfish_logo.png" alt="starfish logo" style="max-width:200px;max-height:200px;clear:both;padding:10px;"/>

Starfish tells you which members of your organization contributed to open source projects on GitHub during a given period of time. Indeed developed this tool to help manage our [FOSS Contributor Fund](https://engineering.indeedblog.com/blog/2019/11/foss-fund-adopters/), a program to manage financial contributions to our open source dependencies (FOSS is Free and Open Source Software). Each month, the fund donates money to a different FOSS project. We use a democratic process to choose the recipient: any Indeed employee who contributed to open source projects during the previous month can vote. Starfish identifies our eligible voters.

Starfish is open source software. We encourage you to use it for your own democratic FOSS contributor fund. Find it on [GitHub](https://github.com/indeedeng/starfish).


## How Starfish Works

Starfish checks a list of GitHub users and identifies which users have contributed to open source projects during a specified time period. Here is a simplified description of how it works:
<ol>
<li>You create a list of people’s GitHub IDs.</li>
<li>You input start and end dates for the period you want to check.</li>
<li>Starfish checks GitHub for open source contributions from each employee in the list.</li>
<li>Starfish outputs the people who contributed during the time period.</li>
</ol>


## Installing and Running Starfish
For detailed instructions, see the [Starfish README](https://github.com/indeedeng/starfish/blob/master/README.md). If you have any issues with installing or running Starfish, please reach out to [opensouce@indeed.com](mailto:opensouce@indeed.com).<br><br>


## Contributing to Starfish
We welcome contributors, and we’re eager for your input.

To contribute, please open an issue (or comment on an existing issue) describing what you want to change or add. Please explain why you want to make the change. <br><br>


## Code of Conduct
Starfish is governed by the [Contributor Covenant v 1.4.1](https://github.com/indeedeng/starfish/blob/master/CODE_OF_CONDUCT.md)<br><br>


## License

[Apache License Version 2.0](https://github.com/indeedeng/starfish/blob/master/LICENSE)
