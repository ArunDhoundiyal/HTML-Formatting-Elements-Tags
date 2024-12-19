import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <del>thinking</del>
      <p>
        My favorite book is <cite>Atomic Habits</cite> by James Clear
      </p>
      <p>
        The <u>see</u> is full of fish.
      </p>
      <details>
        <summary>Details</summary>
        Something small enough to escape casual notice.
      </details>
      <input type="range" id="volume" name="volume" min="0" max="11" />
      <label for="volume">Volume</label>
      {/* <marquee>This text will scroll from right to left</marquee>
      <marquee
        direction="down"
        width="200"
        height="100"
        behavior="alternate"
        scrollamount="2"
      >
        This text will alternate scrolling up and down
      </marquee> */}

      <h1>HTML Formatting Elements Example</h1>
      <p>
        My favorite book is <cite>Atomic Habits</cite> by James Clear
      </p>
      <p>This paragraph demonstrates different HTML formatting elements.</p>

      <p>
        <strong>This text is bold and important (strong).</strong>
      </p>
      <p>
        <b>This text is bold (b), but without semantic importance.</b>
      </p>

      <p>
        <em>This text is italicized to emphasize it.</em>
      </p>
      <p>
        <i>This text is italicized (i), but without semantic meaning.</i>
      </p>

      <p>
        <u>This text is underlined (u).</u>
      </p>

      <p>
        <mark>This text is highlighted (mark) for emphasis.</mark>
      </p>

      <p>
        <small>
          This text is small, often used for less important information (e.g.,
          disclaimers).
        </small>
      </p>

      <p>
        <del>This text is marked as deleted (del).</del>
      </p>
      <p>
        <ins>This text is marked as inserted (ins).</ins>
      </p>

      <p>
        The chemical formula for water is H<sub>2</sub>O (subscript).
      </p>
      <p>
        The mathematical expression is E = mc<sup>2</sup> (superscript).
      </p>

      <p>
        The following is a piece of <code>JavaScript</code> code:
      </p>
      <pre>
        {`const greet = (name) => {
          console.log('Hello, ' + name);
        };
        greet('World');`}
      </pre>

      <p>
        To copy, press <kbd>Ctrl</kbd> + <kbd>C</kbd>.
      </p>

      <p>
        The value of <var>x</var> in the equation <var>x = 10</var>.
      </p>

      <p>
        <s>
          This text is struck through (s), indicating it is outdated or
          incorrect.
        </s>
      </p>

      <q>
        This is an inline quote using the <code>&lt;q&gt;</code> tag.
      </q>

      <blockquote cite="https://example.com">
        "The only way to do great work is to love what you do." - Steve Jobs
      </blockquote>

      <cite>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Steve Jobs
        </a>
      </cite>

      <p>
        HTML stands for <abbr title="HyperText Markup Language">HTML</abbr>.
      </p>

      <h1>HTML Entities Demonstration</h1>

      <h2>Basic HTML Entities</h2>
      <p>The ampersand symbol: &amp;</p>
      <p>The less-than symbol: &lt;</p>
      <p>The greater-than symbol: &gt;</p>
      <p>The double quote: &quot;</p>
      <p>The apostrophe: &apos;</p>

      <h2>Mathematical Symbols</h2>
      <p>The plus-minus symbol: &plusmn;</p>
      <p>The division symbol: &divide;</p>
      <p>The multiplication symbol: &times;</p>
      <p>The not-equal-to symbol: &ne;</p>
      <p>The less-than-or-equal-to symbol: &le;</p>
      <p>The greater-than-or-equal-to symbol: &ge;</p>

      <h2>Currency Symbols</h2>
      <p>The cent symbol: &cent;</p>
      <p>The euro symbol: &euro;</p>
      <p>The pound sterling symbol: &pound;</p>
      <p>The yen symbol: &yen;</p>

      <h2>Special Characters</h2>
      <p>The copyright symbol: &copy;</p>
      <p>The registered trademark symbol: &reg;</p>
      <p>The trademark symbol: &trade;</p>
      <p>The paragraph symbol: &para;</p>
      <p>The section symbol: &sect;</p>

      <h2>Accented Characters</h2>
      <p>The letter e with acute accent: &eacute;</p>
      <p>The letter e with grave accent: &egrave;</p>
      <p>The letter o with umlaut: &ouml;</p>
      <p>The letter c with cedilla: &ccedil;</p>

      <h2>Unicode Characters</h2>
      <p>The check mark symbol: &#10003;</p>
      <p>The heart symbol: &#10084;</p>
      <p>The Earth globe symbol: &#127757;</p>
      <p>The party popper symbol: &#127880;</p>

      <h2>Non-Breaking Space Example</h2>
      <p>
        This sentence contains a non-breaking
        space:&nbsp;You&nbsp;can&nbsp;see&nbsp;the&nbsp;space&nbsp;between&nbsp;words&nbsp;stays&nbsp;intact.
      </p>

      <h2>HTML Code Examples</h2>
      <p>
        To create an inline code, use the <code>&lt;code&gt;</code> element.
      </p>
      <p>
        To display HTML code, use the <code>&lt;pre&gt;</code> tag:
      </p>
      <pre>
        &lt;div class="example"&gt; &lt;h1&gt;Hello World&lt;/h1&gt;
        &lt;/div&gt;
      </pre>
    </div>
  );
}

export default App;
