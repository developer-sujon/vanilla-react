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
      <a href="#">{librarie}</a>
    </li>
  );
};

class App extends React.Component {
  state = {
    searchTerm: "",
    libraries,
    notFound: false,
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
    // const searchKey = this.state.searchTerm.toLocaleLowerCase().trim();

    // if (searchKey && searchKey.length > 0) {
    //   const newLibrariesDate = libraries.filter((librarie) => {
    //     return librarie.toLowerCase().match(searchKey);
    //   });

    //   if (newLibrariesDate.length > 0) {
    //     this.setState({ libraries: newLibrariesDate, notFound: false });
    //   } else {
    //     this.setState({ libraries: newLibrariesDate, notFound: true });
    //   }
    // }
  };

  render() {
    const searchKey = this.state.searchTerm.toLocaleLowerCase().trim();
    let notFound = false;
    let date = libraries;

    if (searchKey && searchKey.length > 0) {
      const newLibrariesDate = libraries.filter((librarie) => {
        return librarie.toLowerCase().match(searchKey);
      });

      if (newLibrariesDate.length > 0) {
        notFound = false;
        date = newLibrariesDate;
      } else {
        notFound = true;
        date = [];
      }
    }

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
        {notFound ? (
          "Libraries Not Found"
        ) : (
          <ul id="names" className="collection with-header">
            {date.map((librarie, index) => (
              <ContactItem key={librarie} librarie={librarie} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
