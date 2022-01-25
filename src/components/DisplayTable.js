import React from "react";

const DisplayTable = ({ data, repositories }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </td>
          <td>
            {repositories.map((repo) => (
              <div key={repo.name}>
                <div>
                  <div>
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
