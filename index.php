<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta http-equiv="Content-Type" content="text/html"/>
	<title> CV </title>
	<link rel="stylesheet" type="text/css" href="includes/styles.css" media="all">
	
</head>
<body>
<!-- ENTETE du site -->
	<header>
	<header id="entete">
		<?php include('includes/entete.php'); ?>
	</header>
	
	<div id="main">
		<nav id="menu">
			<?php include('includes/menu.php'); ?>
		</nav>
		<section id="contenu">
			<?php 
				$nomPage = 'includes/accueil.php'; // page par défaut
				if(isset($_GET['page'])) {
					if(file_exists(addslashes($_GET['page'])) && 
					addslashes($_GET['page']) != 'index.php')
						$nomPage = addslashes($_GET['page']);
				}
				include($nomPage); 

			?>
			<br/><br/>
	 	</section>
	</div>
	<footer id="footer">
			<?php include('includes/piedpage.php'); ?>
	</footer>

</body>
</html>
