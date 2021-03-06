import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/JoaoChrisostomo.png" />
          <div className={styles.authorInfo}>
            <strong>Joao Pedro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio às 08:13" dateTime='2022-05-11 08:13:13'>Publicado há uma hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href=''> jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novo projeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentario'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}