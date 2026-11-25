import { css } from '@styled-system/css'

const Contents = () => (
  <div className={styles.root}>CONTENTS_COMES_HERE</div>
  // path='/' -> Curation
  // path='/{index}' -> Details
  // path='/dl/{index}' -> Download
)

const styles = {
  root: css({
    paddingInline: 'inset.md',
    paddingBlock: 'inset.md',
    display: 'block',
    overflow: 'auto',
    height: 'full',
  }),
}

export default Contents
