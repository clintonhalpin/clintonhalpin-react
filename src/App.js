import React, { Component } from "react";
import qc from "./qc.jpg";
import as from "./as.jpg";
import ex from "./exio.png";
import sf from "./sf.jpg";
import "circular-std";

function Headline({ text }) {
  return (
    <div>
      <h2 className="dark-black">{text}</h2>
      <div>
        <hr />
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    const projects = [
      {
        title: "AlphaSense",
        url: "https://www.alpha-sense.com/index.html",
        description: "AI Powerered business insights",
        job_title: "Lead UX Designer - Search & Discovery",
        highlights: [
          {
            text:
              "Shipped industry leading sentiment product for Earnings Transcripts (UX Lead)",
            link:
              "https://www.alpha-sense.com/insights/sentiment-stock-market-movement"
          },
          {
            text:
              "Organized and lead a company offsite, following the Google Design Sprint methodology.",
            link: "https://www.gv.com/sprint/"
          },
          {
            text:
              "Built various prototypes for new and innovative products of various fidelities."
          }
        ],
        image: as,
        start: "January 2019",
        end: null
      },
      {
        title: "Crypto Exchange",
        url: "",
        description:
          "Built a Crypto Currency Exchange from the Ground up in 6 months",
        job_title: "Lead Full Stack Engineer",
        highlights: [
          {
            text:
              "Lead front-end developer built application from the ground up in less than 6 months",
            link: "https://twitter.com/clintonhalpin/status/1050832836180238337"
          },
          {
            text:
              "Designed core users flows for funding accounts, authentication, and trading",
            link: "https://twitter.com/clintonhalpin/status/1039994694825115648"
          },
          {
            text:
              "Worked extensively with websockets, Docker/Kubernetes, and localization, Automated Testing",
            link:
              "https://www.dropbox.com/s/0v2cp11uy6zlt4g/Oct-26-2018%2011-46-11.mp4?dl=0"
          }
        ],
        image: ex,
        start: "March 2018",
        end: "December 2018"
      },
      {
        title: "Quote Catalog",
        url: "https://quotecatalog.com",
        description:
          "A platform dedicated to becoming the Quote Engine of the internet",
        job_title: "Technology / Design Lead",
        highlights: [
          {
            text:
              "Developed schema and architected data pipeline for over 1M unique metadata entries",
            link: "https://quotecatalog.com/communicator/barack-obama/"
          },
          {
            text:
              "Built custom search engine ( ~80 filters ) and developed custom sorting/ranking systems",
            link: "https://quotecatalog.com/quotes/funny/"
          },
          {
            text:
              "Developed Search Endpoints, API's and Push notification management for iOS Application",
            link:
              "https://apps.apple.com/us/app/qc-inspirational-quotes/id1292183397"
          },
          {
            text:
              "Ansible config based deployment for infrastructure handling over 1M pageviews per month",
            link: "https://www.similarweb.com/website/quotecatalog.com"
          },
          {
            text:
              "Built and evangelized Slack chatbots to manage operations workflows"
          },
          {
            text:
              "Hired four engineers and directly mentored two Junior Engineers"
          }
        ],
        image: qc,
        start: "April 2016",
        end: "March 2018"
      },
      {
        title: "Salesforce",
        url: "https://salesforce.com/",
        description:
          "For three years I played a vital role on the UX team for the Salesforce Marketing Cloud.",
        job_title: "User Experience Designer",
        highlights: [
          {
            text:
              "Lead UX/UI Designer for Social Studio and Marketing Cloud for iOS / Android",
            link:
              "https://apps.apple.com/us/app/salesforce-social-studio/id840173798"
          },
          {
            text:
              "Designed critical and complex features for mobile applications used by many Fortune 500 companies",
            link:
              "https://play.google.com/store/apps/details?id=com.salesforce.socialstudio&hl=en_US"
          },
          {
            text:
              "Designed Sentiment Analysis Admin Tools, as well as Social Account Administration"
          }
        ],
        image: sf,
        start: "January 2013",
        end: "April 2016"
      }
    ];

    const links = [
      {
        url: "https://putz.io",
        title: "Putz",
        description: "My personal budgeting app"
      },
      {
        url:
          "https://docs.google.com/presentation/d/1AGFl4n_bpdYJLvjceJzYUMSJ1dxMYqbqkH1WG69ALN0/edit?usp=sharing",
        title: "Slack Chatbot Sample",
        description: "Demo for my Brooklyn JS Talk about Chatbots"
      },
      {
        url:
          "https://chrome.google.com/webstore/detail/quote-catalog/ghhlpafpmfocpgoepkhmfbdhhjhjnlfe?hl=en",
        title: "Quote Catalog for Google Chrome",
        description: "View a new Quote in every new tab!"
      },
      {
        url:
          "http://clintonhalpin.github.io/jade-email-builder/dist/example-email-DDMMYY-version.html",
        title: "Jade Email Builder",
        description: "Build HTML emails blazing fast with Jade"
      },
      {
        url: "http://clintonhalpin.github.io/is-qa-up/dist/#/",
        title: "Is QA Up?",
        description: "Over 100 responses to a simple question."
      }
    ];
    return (
      <div>
        <div className="bg-gray p2">
          <div className="mx-auto">
            <div className="table col-12">
              <div className="table-cell">
                <a className="bold black inline-block no-underline" href="/">
                  Clinton Halpin
                </a>
              </div>
              <div className="table-cell right-align">
                <ul className="list-reset m0">
                  <li className="inline-block">
                    <a
                      className="black inline-block p2 sm-p3"
                      href="https://github.com/clintonhalpin"
                    >
                      Github
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="black inline-block"
                      href="https://twitter.com/clintonhalpin"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py2 bg-gray">
          <div className="container mx-auto px2">
            <h1 className="jumbo tight">
              I'm Clinton, a full-stack engineer and product designer based in
              New York City.
            </h1>
            <p>
              I’m currently a Lead UX Designer at AlphaSense, where I prototype,
              design and develop our search engine for Financial documents.
            </p>
          </div>
        </div>

        <div className="container mx-auto">
          <Headline text="Work History" />
          {projects.map((p, i) => (
            <div className="project" key={i}>
              <h2 className="mb0">
                <a href={p.url}>{p.title}</a>
                <span className="h5 ml2">
                  {p.start}-{p.end ? p.end : "present"}
                </span>
              </h2>
              <h3 className="mt0">{p.job_title}</h3>
              {p.image && (
                <img
                  src={p.image}
                  className="fit"
                  alt={`${p.title} - Clinton Halpin`}
                />
              )}
              <ul className="fancy-list list-reset">
                {p.highlights &&
                  p.highlights.map(h => (
                    <li>
                      {h.text} {h.link ? <a href={h.link}>[more]</a> : ""}
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div>
            <Headline text="Side Projects" />
            {links.map((l, i) => (
              <div key={i}>
                <h2 className="m0">
                  <a className="link" href={l.url}>
                    {l.title}
                  </a>
                </h2>
                {l.description && <p className="mt0">{l.description}</p>}
                <hr />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white">
          <div className="container mx-auto mxn2 clearfix sm-py3">
            <Headline text="Technolgies" />

            <ul className="col col-6 sm-col sm-col-3 list-reset p2">
              <li className="dark-black bold mb2">Front-end</li>
              <li>
                <ul className="list-reset">
                  <li className="mb1">Javascript</li>
                  <li className="mb1">React</li>
                  <li className="mb1">CSS</li>
                  <li className="mb1">Build Tools</li>
                </ul>
              </li>
            </ul>

            <ul className="col col-6 sm-col sm-col-3 list-reset p2">
              <li className="dark-black bold mb2">Back-end</li>
              <li>
                <ul className="list-reset">
                  <li className="mb1">Node</li>
                  <li className="mb1">PHP</li>
                  <li className="mb1">Elasticsearch</li>
                  <li className="mb1">API Design</li>
                </ul>
              </li>
            </ul>

            <ul className="col col-6 sm-col sm-col-3 list-reset p2">
              <li className="dark-black bold mb2">Ops/IT</li>
              <li>
                <ul className="list-reset">
                  <li className="mb1">AWS</li>
                  <li className="mb1">SQL</li>
                  <li className="mb1">Redis</li>
                  <li className="mb1">Nginx</li>
                  <li className="mb1">Ansible</li>
                </ul>
              </li>
            </ul>

            <ul className="col col-6 sm-col sm-col-3 list-reset p2">
              <li className="dark-black bold mb2">Product Design</li>
              <li>
                <ul className="list-reset">
                  <li className="mb1">UX/UI</li>
                  <li className="mb1">Sketch/Figma</li>
                  <li className="mb1">Agile</li>
                  <li className="mb1">iOS Design</li>
                  <li className="mb1">Material Design</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray mt4">
          <div className="px2">
            <div className="table col-12 p2">
              <div className="table-cell center">
                <a className="bold black inline-block no-underline" href="/">
                  &copy; {new Date().getFullYear()} Clinton Halpin
                </a>
                <br />
                <span className="gray">clintonhalpin(at)gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
