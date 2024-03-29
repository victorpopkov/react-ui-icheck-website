import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import beautify from 'js-beautify';
import classNames from 'classnames';
import reactElementToJSXString from 'react-element-to-jsx-string';

class Source extends Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);

    this.state = {
      activeTab: 'source',
    };
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  toggleTab(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    const { activeTab } = this.state;
    const { children, src, srcAppend, srcFunctionValue, srcPrepend } =
      this.props;

    let html = ReactDOMServer.renderToStaticMarkup(children);

    // label
    html = html.replace(/(<label>)/g, '\n$1');
    html = html.replace(/(<\/label>)/g, '$1\n');

    // input
    html = html.replace(/(<input)/g, '\n$1');

    // ins
    html = html.replace(/(<ins)/g, '\n$1');
    html = html.replace(/(<\/ins>)/g, '$1\n');

    return (
      <div>
        <Nav className="mt-4" tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: activeTab === 'source' })}
              onClick={() => {
                this.toggleTab('source');
              }}
            >
              Source
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: activeTab === 'rendered' })}
              onClick={() => {
                this.toggleTab('rendered');
              }}
            >
              Rendered
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="mb-4">
          <TabPane tabId="source">
            <pre>
              <code className="language-jsx">
                {src ||
                  `${srcPrepend}${reactElementToJSXString(children, {
                    functionValue: () => {
                      if (srcFunctionValue) {
                        return srcFunctionValue;
                      }

                      return '() => {}';
                    },
                    showDefaultProps: false,
                  })}${srcAppend}`}
              </code>
            </pre>
          </TabPane>
          <TabPane tabId="rendered">
            <pre>
              <code className="language-html">
                {beautify.html(html, {
                  indent_size: 2,
                })}
              </code>
            </pre>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

Source.propTypes = {
  children: PropTypes.element.isRequired,
  src: PropTypes.string,
  srcAppend: PropTypes.string,
  srcFunctionValue: PropTypes.string,
  srcPrepend: PropTypes.string,
};

Source.defaultProps = {
  src: '',
  srcAppend: '',
  srcFunctionValue: '',
  srcPrepend: '',
};

export default Source;
