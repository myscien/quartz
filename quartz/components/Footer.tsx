import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()

    const links: Record<string, string> = opts?.links ?? {
      GitHub: "https://github.com/myscien/quartz",
      About: "/about",
    }

    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          © {year} Ethan's Path · Built with <a href="https://quartz.jzhao.xyz/">Quartz</a>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
