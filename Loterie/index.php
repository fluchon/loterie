<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Loterie</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div id="logo">

        </div>
        <div id="titre">
            <h1>Loterie</h1>
        </div>

    </header>
    <main>
        <h2>Bienvenue sur la page de l'application de loterie</h2>
        <section>
            <div id="block_loterie">
                <div id="choixLoterie">
                    <select id="choix">
                        <option value="1">EuroMillions</option>
                        <option value="2">Loto</option>
                        <option value="3">EuroDream</option>
                        <option value="4">Keno</option>
                    </select>
                    <div id="block_btn">
                        <button id="btnLoterie">Lancer la loterie</button>
                        <button id="resetLoterie">Réénitialiser la loterie</button>
                    </div>

                    </div>

                <div id="resultatLoterie">
                    <p>Aucune loterie de lancer</p>
                </div>

            </div>
        </section>
    </main>

    <footer>
        <p>Loterie - Tous droit réserver</p>
        <p><a href="../index.php">Retour à la liste de projet</a></p>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
