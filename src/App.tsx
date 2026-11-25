import { css } from '../styled-system/css'
import Aside from './Aside'
import Control from './Control'
import Contents from './Contents'

function App() {
  return (
    <div className={styles.root}>
      <aside aria-label="mics menu" className={styles.aside}>
        <Aside />
      </aside>
      <section aria-label="playback controller" className={styles.control}>
        <Control />
      </section>
      <main className={styles.contents}>
        <Contents />
      </main>
    </div>
  )
}

const styles = {
  root: css({
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    gridTemplateRows: '110px minmax(0, 1fr)',
    gridTemplateAreas: `
      "aside control"
      "aside contents"
    `,
    height: '100vh',
    lgDown: {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `
        "control"
        "contents"
      `,
    },
  }),
  aside: css({
    gridArea: 'aside',
    minWidth: '0',
    minHeight: '0',
    lgDown: {
      display: 'none',
    },
  }),
  control: css({
    gridArea: 'control',
    minWidth: '0',
    minHeight: '0',
  }),
  contents: css({
    gridArea: 'contents',
    minWidth: '0',
    minHeight: '0',
    paddingTop: '10px',
  }),
}

export default App
