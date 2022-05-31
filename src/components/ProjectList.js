import React from 'react';
import PropTypes from 'prop-types';

class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="container">
        {projects.map((project) => (
          <div className="card">
            <img src={project.img} alt={project.category} />
          </div>
        ))}
      </div>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.object,
};

export default ProjectList;
