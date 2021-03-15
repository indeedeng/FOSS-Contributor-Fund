# FOSS Contributor Fund Playbook
## A detailed guide to running your very own FOSS Contributor Fund.

## Overview
The FOSS (Free and Open Source Software) Contributor Fund is a framework for selecting open source projects that a company supports financially. This initiative is designed to encourage open source participation and help companies take an active role in sustaining the projects they depend on. The initiative puts the sponsorship decision into the hands of open source contributors within the company, democratizing the sponsorship process.

The salient details of the FOSS Contributor Fund at Indeed are:

* The initiative runs for one year.
* The funds are distributed evenly on a monthly basis.
* Anyone at the company can nominate a project to receive funds.
* If you contribute to an Open Source initiative, you can vote for a nominated project.
* You must make an Open Source contribution in the same quarter you want to cast your vote.

*We recommend that you review this playbook and come up with a similar set of criteria and processes that suit your unique needs. Any number of levers can be used to determine project and voter eligibility, and those may be different than what is outlined in the following document. We’d love to hear from you and learn from your experience running your own version.*

### Getting Started
To get started, you will need to set up a few mechanisms to collect information or administer voting and disbursement. Using Google forms is a lightweight way to collect some of the information listed below. We suggest you set up the following in advance:

* A mechanism to collect nominations
* A mechanism to collect Github IDs
* A mechanism to collect non-Github contribution activity
* A mechanism for Identifying eligible voters using [Starfish](https://github.com/indeedeng/starfish)
* A mechanism for voting (see Voting section for suggested tools)
* You may also want to work ahead to get common vendors into your procurement system, such as [Open Collective](https://opencollective.com/) or the [Software Freedom Conservancy](https://sfconservancy.org/)

### Other Resources
* [FOSS Fund Blueprint](https://github.com/indeedeng/FOSS-Contributor-Fund)
* [Relevant Indeed FOSS Contributor Fund Blog Posts](https://medium.com/indeed-engineering/search?q=foss%20contributor%20fund)

### Contact Us
You can contribute to this guide by emailing opening a pull request.

If you are interested in joining the community of FOSS Fund Adopters, want more information, or would like to join a Q&A session, please email us at opensource@indeed.com. We also have a slack community for FOSS Fund Adopters.

## Nominations
### Who can nominate a project?
Anyone in the company can nominate a project. Projects must meet a set of nomination criteria to be eligible. These are detailed below.

### Nomination Criteria

Decide what project eligibility criteria are most important to you. Consider whether a project must be owned by a non-profit, must use an approved funding mechanism, must use a license from a specific  list, etc.
At Indeed, a project must meet the following criteria to be eligible for nomination. Before including projects in the voting process, review each nomination to ensure it meets all of the criteria. If it does not, the project is disqualified and excluded from the voting process.

* It must be in use by the company or one of its subsidiaries
* It must use an OSI-Approved License
* It must have some mechanism for receiving funds
* It cannot be owned by an employee of the company or one of its subsidiaries

#### It must be in use by the company or one of its subsidiaries
A broad view is encouraged when applying this criteria to encourage participation from groups beyond Engineering. Companies use FOSS projects in many ways. Some projects are included in internal projects or tools as a dependency. Examples include the apache-commons library, node modules, cryptography libraries, and so on. Other projects may be part of the underlying infrastructure. This accounts for projects like Linux, Apache Kafka, Kubernetes, and so on. Finally, some projects may be used to help run the business. Examples include Selenium, the GNU Image Manipulation Program (GIMP), Git, and so on.
By requiring projects to be in use, FOSS Fund adopters can ensure that donations are aligned with business interests, by helping to sustain open source projects on which the company depends.

#### The project must use an OSI-approved license
Since the goal of the initiative is to support the developers of Free and Open Source Software, the project license is critically important. The list of OSI Approved licenses can be used to gauge which projects are eligible for an award.

Other options include:
* Licenses endorsed by the [Free Software Foundation](https://www.gnu.org/licenses/license-list.html)
* Licenses that meet the [Debian Free Software Guidelines](https://wiki.debian.org/DFSGLicenses)
* Licenses on the [Fedora Software License List](https://fedoraproject.org/wiki/Licensing:Main?rd=Licensing)
Wikipedia has a [great comparison of licenses approved by different authorities.](https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses#Approvals)

By using an existing list of licenses approved by a neutral third party, one can avoid making ad-hoc decisions about which projects should or should not qualify based on their license.

*Further consideration should be given for projects that are in the spirit of this program that do not meet the licensing criteria, but still fit into the broad category of being free and open. Additionally, a project might meet all eligibility criteria but be fully sponsored by another entity, making it a less than ideal choice.*

#### The project must have some mechanism for receiving funds
As a practical matter, there must be a way to transfer funds to the project. There are many ways a project can receive funds, including but not limited to the following:
* Open Collective
* Patreon
* PayPal
* GitHub Sponsors
* An umbrella foundation like Software Freedom Conservancy

The initiative assumes that projects which have clearly indicated how to express financial support have put some amount of thought into how funds might be used. Further, a company's procurement department is unlikely to be able to process a contribution to a project with no clear mechanism for receiving funds. We advise that you contact your procurement department for guidance on what they consider to be acceptable mechanisms of payment (i.e. would they be comfortable processing a payment to a maintainer whose only way of accepting funds is by PayPal?)

#### The project cannot be owned by an employee
Projects that are wholly owned by an individual employed by the company or one of the company's subsidiaries should be ineligible to receive a contribution from the FOSS Contributor Fund.
This helps avoid situations which could be legally, ethically, or financially complicated. At a minimum, it helps limit the need to determine tax burdens and other questions bound up with compensation questions.

## Voting

### How can I find out who is eligible to vote?
Decide what voting eligibility criteria are most important to you, and determine which projects and contributions you consider to be eligible. For example, consider whether you want to allow any contributions, only work contributions, or contributions to specific projects, etc. Furthermore, you might consider whether you want to count contributions toward any FOSS dependency, only indirect dependencies, only projects with specific dependents, etc.

At Indeed, we run the fund quarterly, awarding three grants per quarter. The elected project receives 1/12th of the year’s total fund. Anyone in the organization who makes an open source contribution in the same quarter as the election can vote.

### What counts as an open source contribution?
A broad view of open source contribution is encouraged. We suggest you decide which mix of the following suits your specific needs.

The [Starfish](https://github.com/indeedeng/starfish) tool looks for a specific set of GitHub events for a given user to determine voter eligibility. Specifically, Starfish looks for events related to Pull Requests, Issues, and Comments. The [Starfish repo](https://github.com/indeedeng/starfish) includes complete details about the event selection.

Where existing tooling doesn’t capture all open source activity, it is recommended to provide a way for potential voters to self-register based on uncounted contributions. For example, if an employee volunteers significant time organizing a meetup for an open source project and wishes to participate in the FOSS Contributor Fund voting process, there should be a mechanism for them to register their eligibility. Fund administrators may need to manually review these registrations. A template for tracking Non-Github contributions is available in the Getting Started section.

### How are votes counted?
Transparency throughout the voting process is encouraged. There are a number of existing third-party platforms that can be used to collect votes. A lightweight option is [Google forms]. Polls within slack are yet another possibility. This method allows the fund administrator to make a channel with that month’s eligible voters, and use a Slack polling app such as [Simple Poll](https://simplepoll.rocks/) or [Polly](https://www.polly.ai/slack-poll) to capture votes and discussion in a single channel.

Once you’ve selected a tool to use for counting votes and verified all of the nominations meet the criteria, you can start the voting period. The steps required will vary depending on the tool you have selected, but a few best practices are outlined below:
* Votes should be anonymous
* An eligible voter may only vote once
* A voting period is typically open for one week. After that time has elapsed, remember to close the form or poll to prevent future votes.

After the voting period ends, the project with the most votes is declared the winner of that month’s FOSS Contributor Fund. In order to remain transparent during the voting process, we recommend you publish the aggregate final results of the poll. This could be done on a wiki page, in a Slack channel, or other place of record. The information should be public within your company or organization.

## Distributing Funds
What happens after a winner is declared?

Before starting the procurement process or making any formal announcements, the fund administrators contact the receiving project. This will help ensure that the project is prepared to receive the funds.
First, notify the recipient. This is typically done by email. We recommend you share some background on what a FOSS Contributor Fund is and how their project is used at your company or organization.

In order to distribute funds to the winning project, follow your internal process for procurement. These processes vary widely by company or organization but some common information to collect in order to add a vendor are:
* Recipient name (or designated contact person)
* Email address
* Physical mailing address
* Phone number

After your internal procurement process has been completed, reach out again to the recipient to confirm payment has been received.
