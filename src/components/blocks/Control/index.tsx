import { css } from '@styled-system/css'

const Control = () => (
  <div className={styles.root}>CONTROL_COMES_HERE</div>
)

const styles = {
  root: css({
    borderBottom: 'border.default',
    paddingInline: 'inset.md',
    paddingBlock: '0',
    display: 'flex',
    alignItems: 'center',
    height: 'full',
  }),
}

export default Control
