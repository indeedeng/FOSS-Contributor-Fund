# FOSS Contributor Fund Overview

![OSS Lifecycle](https://img.shields.io/osslifecycle/indeedeng/FOSS-Contributor-Fund.svg)

The FOSS (Free and Open Source Software) Contributor Fund is a framework for selecting open source projects that a company supports financially. This initiative is designed to encourage open source participation and help companies take an active role in sustaining the projects they depend on. The initiative puts the sponsorship decision into the hands of open source contributors within the company, democratizing the sponsorship process.

The salient details of the FOSS Contributor Fund:

* The initiative runs for one year
* Anyone at the company can nominate a project to receive funds
* A voting cycle runs for one month
* Each voting cycle, 1/12th of the total FOSS Contributor Fund is distributed to a nominated project, as determined by vote
* Anyone at the company who makes an open source contribution may cast a vote to determine where the funds should go in a given voting cycle

## Who Can Nominate A Project?

Anyone in the company can nominate a project. Projects must meet a set of nomination criteria to be eligible.

## What Are The Nomination Criteria?

A project must meet the following criteria to be eligible for nomination:

* It must be in use by the company or one of its subsidiaries
* It must use an OSI-Approved License
* It must have some mechanism for receiving funds
* It cannot be owned by an employee of the company or one of its subsidiaries

### The Project Must be In Use By The Company Or One Of Its Subsidiaries

A broad view is encouraged when applying this criteria to encourage participation from groups beyond Engineering. Companies use FOSS projects in many ways. Some projects are included in internal projects or tools as a dependency. Examples include the apache-commons library, node modules, cryptography libraries, and so on. Other projects may be part of the underlying infrastructure. This accounts for projects like Linux, Apache Kafka, Kubernetes, and so on. Finally, some projects may be  used to help run the business. Examples include Selenium, the GNU Image Manipulation Program (GIMP), Git, and so on.

By requiring projects to be in use, FOSS Fund adopters can ensure that donations are aligned with business interests, by helping to sustain open source projects on which the company depends.

### The Project Must Use An OSI-Approved License

Since the goal of the initiative is to support the developers of Free and Open Source Software, the project license is critically important. The list of OSI Approved licenses can be used to gauge which projects are eligible for an award. Other options include:
* Licenses endorsed by the [Free Software Foundation](https://www.gnu.org/licenses/license-list.html)
* Licenses that meet the [Debian Free Software Guidelines](https://wiki.debian.org/DFSGLicenses)
* Licenses on the [Fedora Software License List](https://fedoraproject.org/wiki/Licensing:Main?rd=Licensing)

Wikipedia has a [great comparison of licenses approved by different authorities.](https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses#Approvals)

By using an existing list of licenses approved by a neutral third party, one can avoid making ad-hoc decisions about which projects should or should not qualify based on their license.

### The Project Must Have Some Mechanism For Receiving Funds

As a practical matter, there must be a way to transfer funds to the project. There are many ways a project can receive funds, including but not limited to the following:

* Open Collective
* Patreon
* PayPal
* GitHub Sponsors
* An umbrella foundation like Software Freedom Conservancy

The initiative assumes that projects which have clearly indicated how to express financial support have put some amount of thought into how funds might be used. Further, a company's procurement department is unlikely to be able to process a contribution to a project with no clear mechanism for receiving funds.

### The Project Cannot Be Owned By An Employee

Projects that are wholly owned by an individual employed by the company or one of the company's subsidiaries should be ineligible to receive a contribution from the FOSS Contributor Fund.

This helps avoid situations which could be legally, ethically, or financially complicated. At a minimum, it helps limit the need to determine  tax burdens and other questions bound up with compensation questions.

## Who Can Vote On A Distribution?

Anyone who makes an open source contribution in a calendar month can cast a vote to determine where the funds should go for that month’s voting cycle. That is, if you make an open source contribution during the month of July, you get to vote on where the July funds should go.

## What Counts As An Open Source Contribution?

A broad view of open source contribution is encouraged. The [Starfish](https://github.com/indeedeng/starfish) tool looks for a specific set of GitHub events for a given user to determine voter eligibility. Specifically, Starfish looks for events related to Pull Requests, Issues, and Comments. The [Starfish repo](https://github.com/indeedeng/starfish) includes complete details about the event selection.

Where existing tooling doesn’t capture all open source activity, it is recommended to provide a way potential voters to self-registering based on uncounted contributions. For example, if an employee volunteers significant time organizing a meetup for an open source project and wishes to participate in the FOSS Contributor Fund voting process, there should be a mechanism for them to register their eligibility. Fund administrators may need to manually review these registrations.

## How Are Votes Counted?

Transparency in the voting process is encouraged. There are a number of existing platforms to collect votes. [Condorcet Internet Voting System](https://civs.cs.cornell.edu/) by Cornell is one option.

## What Happens When A Winner Is Declared?

Before starting the procurement process or making any formal announcements, the fund administrators contact the receiving project. This will help ensure that the project is prepared to receive the funds.

## License

All materials in this repo are licensed under the Creative Commons [Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/)
