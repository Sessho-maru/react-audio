import { css } from '../styled-system/css'

function Aside() {
  return <div className={styles.root}>ASIDE_COMES_HERE</div>
}

const styles = {
  root: css({
    boxSizing: 'border-box',
    padding: '0 0.75rem',
    height: '100%',
    borderRight: '1.3px solid #f4511c',
    backgroundColor: '#e8eaf6',
  }),
}

export default Aside
