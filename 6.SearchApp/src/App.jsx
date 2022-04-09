import React from "react";
const libraries = [
  "React",
  "Node Js",
  "React Native",
  "Jquery",
  "ExpressJS",
  "Redux",
  "Angular",
  "Vue Js",
  "Motion",
  "Next",
  "TypeScript",
];

const ContactItem = ({ librarie }) => {
  return (
    <li className="collection-item">
      <a href="https://sujon.one">{librarie}</a>
    </li>
  );
};

class App extends React.Component {
  state = {
    searchTerm: "",
    libraries: libraries,
    notFound: false,
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
    // this.setState({ ...this.state.searchTerm = e.target.value });

    let searchKey = this.state.searchTerm.toLowerCase().trim();

    console.log(this.state.searchTerm);

    if (searchKey && searchKey.length > 0) {
      const newLibrariesDate = libraries.filter((librarie) => {
        return librarie.toLowerCase().includes(searchKey);
      });

      if (newLibrariesDate.length > 0) {
        this.setState({ libraries: newLibrariesDate, notFound: false });
      } else {
        this.setState({ libraries: [], notFound: true });
      }
    } else {
      this.setState({ libraries, notFound: false });
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="center-align">JavaScript Libraries</h1>
        <input
          type="text"
          id="filterInput"
          placeholder="Search names..."
          value={this.state.searchTerm}
          onChange={(e) => this.handleSearch(e)}
        />
        {this.state.notFound ? (
          "Libraries Not Found"
        ) : (
          <ul id="names" className="collection with-header">
            {this.state.libraries.map((librarie, index) => (
              <div key={librarie}>
                <ContactItem librarie={librarie} />
              </div>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
