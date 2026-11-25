import { css } from '../styled-system/css'

function Contents() {
  return <div className={styles.root}>CONTENTS_COMES_HERE</div>
}

const styles = {
  root: css({
    boxSizing: 'border-box',
    padding: '0 0.75rem',
    height: 'full',
    display: 'block',
    overflow: 'auto',
  }),
}

export default Contents
