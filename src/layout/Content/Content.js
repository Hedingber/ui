import React from 'react'
import PropTypes from 'prop-types'

import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs'
import YamlModal from '../../common/YamlModal/YamlModal'
import ArtifactsFilterMenu from '../../components/ArtifacstFilterMenu/ArtifactsFilterMenu'
import Table from '../../components/Table/Table'

import refreshIcon from '../../images/refresh.png'

import './content.scss'

const Content = ({
  match,
  refresh,
  handleCancel,
  convertedYaml,
  filters,
  ...props
}) => {
  return (
    <>
      <div className="content__header">
        <Breadcrumbs match={match} onClick={handleCancel} />
      </div>
      <div className="content">
        <div className="content__menu">
          <ul className="content__menu__list">
            <li className="content__menu__list_item active">Monitor</li>
            {/*<li className="jobs__menu__list_item">Edit</li>*/}
            {/*<li className="jobs__menu__list_item">Create</li>*/}
          </ul>
        </div>
        <div className="content__action_bar">
          <ArtifactsFilterMenu filters={filters} />
          <button className="content__action_bar_refresh" onClick={refresh}>
            <img src={refreshIcon} alt="refresh" />
          </button>
        </div>

        <YamlModal convertedYaml={convertedYaml} />
        <Table handleCancel={handleCancel} match={match} {...props} />
      </div>
    </>
  )
}

Content.defaultProps = {
  job: {}
}

Content.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSelectItem: PropTypes.func.isRequired,
  job: PropTypes.shape({}),
  content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.shape({}).isRequired,
  refresh: PropTypes.func.isRequired
}

export default Content