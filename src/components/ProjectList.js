import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="container">
        {projects.map((project) => (
            <img className="card" key={nanoid()} src={project.img} alt={project.category} />
        ))}
      </div>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
