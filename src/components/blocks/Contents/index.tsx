import { css } from '@styled-system/css'

const Contents = () => (
  <div className={styles.root}>CONTENTS_COMES_HERE</div>
)

const styles = {
  root: css({
    boxSizing: 'border-box',
    padding: '0 0.75rem',
    height: '100%',
    display: 'block',
    overflow: 'auto',
  }),
}

export default Contents
