import { css } from '@styled-system/css'

const Control = () => (
  <div className={styles.root}>CONTROL_COMES_HERE</div>
)

const styles = {
  root: css({
    boxSizing: 'border-box',
    padding: '0 0.75rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #f4511c',
  }),
}

export default Control
