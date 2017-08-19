import React, { Component } from 'react';
import qc from './qc.jpg';
import hitch from './hitch.jpg';
// import sf from './sf.jpg';
// import cmu from './cheermeup.jpg';
// import ssa from './ssa.jpg';

class App extends Component {
  render() {
    return (
      <div>
        
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="table col-12 px2 sm-px0">
              <div className="table-cell">
                <a className="bold black inline-block no-underline" href="/">Clinton Halpin</a>
              </div>
              <div className="table-cell right-align">
                <ul className="list-reset m0">
                  <li className="inline-block"><a className="black inline-block p2 sm-p3" href="https://github.com/clintonhalpin">Github</a></li>
                  <li className="inline-block"><a className="black inline-block" href="https://twitter.com/clintonhalpin">Twitter</a></li>
                </ul>
              </div>
            </div>
            <hr className="m0" />
          </div>
        </div>

        <div className="container mx-auto px2">

          <h1 className="jumbo tight">technology lead, product, ux/ui &amp; background.</h1>

          <h2 className="mb0"><a href="https://quotecatalog.com">Quote Catalog</a><span className="h5 ml2">Present</span></h2>
          <hr />
          <img src={qc} className="fit" alt="Quote Catalog" />
          <p className="mt0">A platform dedicated to becoming the Quote Engine of the internet.</p>

          <ul className="fancy-list list-reset">
            <li>Chatbots and automation</li>
            <li>Search engines</li>
            <li>Ranking Algorithms, Machine Learning, Natrual Language Processing</li>
          </ul>
          
          <h2 className="m0"><a href="https://salesforce.com">Salesforce</a><span className="h5 ml2">2013-2016</span></h2>
          <hr />
          <p className="mt0">For three years I played a vital role on the UX team for the Salesforce Marketing Cloud.</p>

          <ul className="fancy-list list-reset">
            <li>UX Lead on 2 Mobile applications ( iOS / Android )</li>
            <li>Developed Style Guides and Design tooling systems that shipped into production</li>
            <li>UX Lead on Social Account management ( many many other Admin features )</li>
          </ul>
          
          <h2 className="m0"><a href="https://thehitch.com">the Hitch</a><span className="h5 ml2">2015-2016</span></h2>
          <hr />
          <img src={ hitch } className="fit" alt="The Hitch" />
          <p className="mt0">A platform for searching and discovering new wedding venues nearby with upfront pricing and amenity listings.</p>

          <ul className="fancy-list list-reset">
            <li>Front-End Development</li>
            <li>UX & Product Planning</li>
          </ul>

          <h2 className="dark-black py2 m0">Even More</h2>

          <h2 className="m0"><a href="https://github.com/thoughtis/gistbot">Slack Chatbot Sample</a></h2>
          <hr />
          <p className="mt0">Demo for my Brooklyn JS Talk about Chatbots</p>

          <h2 className="m0"><a href="https://chrome.google.com/webstore/detail/quote-catalog/ghhlpafpmfocpgoepkhmfbdhhjhjnlfe?hl=en">Quote Catalog for Google Chrome</a></h2>
          <hr />
          <p className="mt0">View a new Quote in every new tab! </p>

          <h2 className="m0"><a href="https://chrome.google.com/webstore/detail/tab-monitor/ndppnnfbbpbcekmmjhkpfnplkppneflk?hl=en">Tab Monitor</a></h2>
          <hr />
          <p className="mt0">See how many tabs you open everyday</p>

          <h2 className="m0"><a href="http://cheermeup.io">Cheermeup</a></h2>
          <hr />
          <p className="mt0">Create a custom meme that you can share with friends.</p>

          <h2 className="m0"><a href="http://clintonhalpin.github.io/jade-email-builder/dist/example-email-DDMMYY-version.html">Jade Email Builder</a></h2>
          <hr />
          <p className="mt0">Build HTML emails blazing fast with Jade</p>

          <h2 className="m0"><a href="http://clintonhalpin.github.io/is-qa-up/dist/#/">Is QA Up?</a></h2>
          <hr />
          <p className="mt0">Over 100 responses to a simple question.</p>

          <h2 className="m0"><a href="http://kylethrash.com">Kyle Thrash</a></h2>
          <hr />
          <p className="mt0">Website for NYC film director &amp; high-school friend</p>
          
        </div>


        <div className="bg-white">

          <div className="container mx-auto mxn2 clearfix sm-py3">

              <h2 className="dark-black p2 m0">Experience With</h2>
              <div className="px2">
                <hr />
              </div>

              <ul className="col col-6 sm-col sm-col-3 list-reset p2">
                <li className="dark-black bold mb2">Front-end</li>
                <li>
                  <ul className="list-reset">
                    <li className="mb1">Javascript</li>
                    <li className="mb1">React</li>
                    <li className="mb1">Angular</li>
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
                    <li className="mb1">MYSQL</li>
                    <li className="mb1">Elasticsearch</li>
                    <li className="mb1">API Design</li>
                  </ul>
                </li>
              </ul>

              <ul className="col col-6 sm-col sm-col-3 list-reset p2">
                <li className="dark-black bold mb2">Ops/IT</li>
                <li>
                  <ul className="list-reset">
                    <li className="mb1">AWS Cloud</li>
                    <li className="mb1">MYSQL</li>
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
                    <li className="mb1">UX</li>
                    <li className="mb1">UI</li>
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
                <a className="bold black inline-block no-underline" href="/">&copy; 2017 Clinton Halpin</a><br />
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
