import { css } from '@styled-system/css'

const Aside = () => (
  <div className={styles.root}>ASIDE_COMES_HERE</div>
)

const styles = {
  root: css({
    borderRight: 'border.default',
    backgroundColor: 'bg.aside',
    paddingInline: 'inset.md',
    paddingBlock: '0',
    height: 'full',
  }),
}

export default Aside
