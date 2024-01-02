import { useRef } from 'react';

function App() {
  const gamesRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="max-w-3xl mx-auto px-6 my-6">
      <nav className="flex justify-end top-2 fixed right-6">
        <p>
          <button className="btn" onClick={() => {
            // Basic jumping to the top of the page
            // Note: the x value is 0 here
            // window.scrollBy(0, window.innerHeight)

            // Jumping to the top of the page with smooth scrolling
            window.scrollBy({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}>
            Next Page
          </button>
        </p>
      </nav>

      <h1 className="text-3xl font-bold mb-4">Top Games of 2023</h1>

      <p className="italic mb-6 text-slate-500"><em>Art from <a className="underline" href="https://www.giantbomb.com/">Giant Bomb</a>, descriptions from <a className="underline" href="https://www.wikipedia.org/">Wikipedia</a></em></p>

      <p className="flex gap-4 mb-6">
        {/* Using a fragment */}
        {/* <a className="btn" href="#games">
          Jump to Games
        </a> */}

        {/* Using onClick handler for more control */}
        <button className="btn" onClick={() => {
          // Basic jumping to the top of the page
          // gamesRef.current?.scrollIntoView();

          // Jumping to the top of the page with smooth scrolling
          gamesRef.current?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
          Jump to Games
        </button>

        {/* <button className="btn" onClick={() => {
          const element = document.getElementById('games');
          // const element = document.querySelector('#games');
          element?.scrollIntoView({
            behavior: 'smooth'
          }) 
        }}>
          Jump to Games
        </button> */}
      </p>

      <ul className="grid grid-cols-3 gap-4 mb-6" onClick={(event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLAnchorElement;
        const id = target.getAttribute('href')?.replace('#', '');
        const element = document.getElementById(String(id));
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }}>
        <li>
          <a href="#alan-wake-ii">
            <img className="pointer-events-none" width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202883/my-scrolling/alan-wake-ii_avx9ae.jpg" alt="Alan Wake II" />
          </a>
        </li>
        <li>
          <a href="#baldurs-gate-3">
            <img className="pointer-events-none" width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/w_480,h_640,c_fill,g_north/f_auto,q_auto/v1704202883/my-scrolling/baldurs-gate-3_ifwsbs.jpg" alt="Baldur's Gate 3" />
          </a>
        </li>
        <li>
          <a href="#bayonetta-origins-cereza-and-the-lost-demon">
            <img className="pointer-events-none" width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202883/my-scrolling/bayonetta-origins-cereza-and-the-lost-demon_mtfa3u.jpg" alt="Bayonetta Origins: Cereza and the Lost Demon" />
          </a>
        </li>
        <li>
          <a href="#blasphemous-ii">
            <img className="pointer-events-none" width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/w_480,h_640,c_fill,g_south/f_auto,q_auto/v1704202883/my-scrolling/blasphemous-ii_tzgyvq.jpg" alt="Blasphemous II" />
          </a>
        </li>
        <li>
          <a href="#dead-space">
            <img className="pointer-events-none" width="512" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/w_480,h_640,c_fill,g_north/f_auto,q_auto/v1704202884/my-scrolling/dead-space_ygxrt4.jpg" alt="Dead Space" />
          </a>
        </li>
        <li>
          <a href="#final-fantast-xvi">
            <img className="pointer-events-none" width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202884/my-scrolling/final-fantast-xvi_tmhsng.jpg" alt="Final Fantasy XVI" />
          </a>
        </li>
        <li>
          <a href="#resident-evil-4">
            <img className="pointer-events-none" width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202884/my-scrolling/resident-event-4_mpa9um.jpg" alt="Resident Evil 4" />
          </a>
        </li>
        <li>
          <a href="#super-mario-bros-wonder">
            <img className="pointer-events-none" width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202885/my-scrolling/super-mario-bros-wonder_hypzv5.jpg" alt="Super Mario Bros. Wonder" />
          </a>
        </li>
        <li>
          <a href="#the-legend-of-zelda-tears-of-the-kingdom">
            <img className="pointer-events-none" width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202885/my-scrolling/the-legend-of-zelda-tears-of-the-kingdom_tk2kx7.jpg" alt="The Legend of Zelda: Tears of the Kingdom" />
          </a>
        </li>
      </ul>

      <div ref={gamesRef} id="games">

        <h2 className="text-2xl font-bold mb-6">Games</h2>

        <div id="alan-wake-ii" className="grid grid-cols-[200px_auto] gap-8 mb-6">
          <img width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202883/my-scrolling/alan-wake-ii_avx9ae.jpg" alt="" />
          <div>
            <h3 className="text-lg font-bold mb-2">Alan Wake II</h3>
            <p>Alan Wake 2 is a 2023 survival horror game developed by Remedy Entertainment and published by Epic Games Publishing.</p>
          </div>
        </div>

        <div id="baldurs-gate-3" className="grid grid-cols-[200px_auto] gap-8 mb-6">
          <img width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/w_480,h_640,c_fill,g_north/f_auto,q_auto/v1704202883/my-scrolling/baldurs-gate-3_ifwsbs.jpg" alt="" />
          <div>
            <h3 className="text-lg font-bold mb-2">Baldur's Gate 3</h3>
            <p>Baldur's Gate 3 is a 2023 role-playing video game developed and published by Belgian game developer Larian Studios. The game is the third main installment in the Baldur's Gate series, based on the tabletop fantasy role-playing system of Dungeons & Dragons.</p>
          </div>
        </div>

        <div id="bayonetta-origins-cereza-and-the-lost-demon" className="grid grid-cols-[200px_auto] gap-8 mb-6">
          <img width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202883/my-scrolling/bayonetta-origins-cereza-and-the-lost-demon_mtfa3u.jpg" alt="" />
          <div>
            <h3 className="text-lg font-bold mb-2">Bayonetta Origins: Cereza and the Lost Demon</h3>
            <p>Bayonetta Origins: Cereza and the Lost Demon is a 2023 action-adventure game developed by PlatinumGames and published by Nintendo for the Nintendo Switch. A prequel to the Bayonetta series, it tells the story of the titular protagonist as a young witch named Cereza.</p>
          </div>
        </div>

        <div id="blasphemous-ii" className="grid grid-cols-[200px_auto] gap-8 mb-6">
          <img width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/w_480,h_640,c_fill,g_south/f_auto,q_auto/v1704202883/my-scrolling/blasphemous-ii_tzgyvq.jpg" alt="" />
          <div>
            <h3 className="text-lg font-bold mb-2">Blasphemous II</h3>
            <p>Blasphemous 2 is a side-scrolling Metroidvania video game developed by The Game Kitchen and published by Team17. A sequel to Blasphemous, the game was released for Microsoft Windows, Nintendo Switch, PlayStation 5 and Xbox Series X/S in August 2023 and for PlayStation 4 and Xbox One in November 2023.</p>
          </div>
        </div>

        <div id="dead-space" className="grid grid-cols-[200px_auto] gap-8 mb-6">
          <img width="512" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/w_480,h_640,c_fill,g_north/f_auto,q_auto/v1704202884/my-scrolling/dead-space_ygxrt4.jpg" alt="" />
          <div>
            <h3 className="text-lg font-bold mb-2">Dead Space</h3>
            <p>Dead Space is a science fiction/horror franchise created and directed by Glen Schofield. Dead Space was developed by Visceral Games and published and owned by Electronic Arts.</p>
          </div>
        </div>

        <div id="final-fantast-xvi" className="grid grid-cols-[200px_auto] gap-8 mb-6">
          <img width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202884/my-scrolling/final-fantast-xvi_tmhsng.jpg" alt="" />
          <div>
            <h3 className="text-lg font-bold mb-2">Final Fantasy XVI</h3>
            <p>Final Fantasy XVI is a 2023 action role-playing game developed and published by Square Enix. The sixteenth main installment in the Final Fantasy series, it was released for the PlayStation 5. Downloadable content is in development.</p>
          </div>
        </div>

        <div id="resident-evil-4" className="grid grid-cols-[200px_auto] gap-8 mb-6">
          <img width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202884/my-scrolling/resident-event-4_mpa9um.jpg" alt="" />
          <div>
            <h3 className="text-lg font-bold mb-2">Resident Evil 4</h3>
            <p>Resident Evil 4 is a survival horror game by Capcom, originally released for the GameCube in 2005. Players control the special agent Leon S. Kennedy on a mission to rescue the US president's daughter, Ashley Graham, who has been kidnapped by a religious cult in rural Spain.</p>
          </div>
        </div>

        <div id="super-mario-bros-wonder" className="grid grid-cols-[200px_auto] gap-8 mb-6">
          <img width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202885/my-scrolling/super-mario-bros-wonder_hypzv5.jpg" alt="" />
          <div>
            <h3 className="text-lg font-bold mb-2">Super Mario Bros. Wonder</h3>
            <p>Super Mario Bros. Wonder is a 2023 platform game developed and published by Nintendo for the Nintendo Switch. It is the first traditional side-scrolling Super Mario game since New Super Mario Bros. U.</p>
          </div>
        </div>

        <div id="the-legend-of-zelda-tears-of-the-kingdom" className="grid grid-cols-[200px_auto] gap-8 mb-6">
          <img width="480" height="640" src="https://res.cloudinary.com/spacejelly-tutorials/image/upload/f_auto,q_auto/v1704202885/my-scrolling/the-legend-of-zelda-tears-of-the-kingdom_tk2kx7.jpg" alt="" />
          <div>
            <h3 className="text-lg font-bold mb-2">The Legend of Zelda: Tears of the Kingdom</h3>
            <p>The Legend of Zelda: Tears of the Kingdom is a 2023 action-adventure game developed and published by Nintendo for the Nintendo Switch.</p>
          </div>
        </div>
      </div>

      <footer className="mt-12">
        {/* Using an empty fragment */}
        {/* <a className="btn" href="#">
          Jump to Top
        </a> */}

        {/* Using onClick handler for more control */}
        <button className="btn" onClick={() => {
          // Basic jumping to the top of the page
          // Note: the x value is 0 here
          // window.scroll(0, 0);

          // Jumping to the top of the page with smooth scrolling
          window.scroll({
            top: 0,
            behavior: 'smooth'
          });
        }}>
          Jump to Top
        </button>
      </footer>
    </div>
  )
}

export default App
