export const Footer = () => {

  // HTML to be returned to GiffyGram component
  return `
        <footer class="footer">
            <div class="footer__item">
                Posts since <select id="yearSelection">
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                </select>
                <span id="postCount">0</span>
            </div>
        </footer>
    `
}
