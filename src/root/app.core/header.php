<!DOCTYPE html>

<head>

    <title><?php echo get_page_title(); ?></title> 

    <meta charset="utf-8">

    <link rel="icon" href="<?php echo LOGO; ?>" >
    
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSS -->
    <?php get_script( ['script_type'=>'css', 'file_name'=>'aff'] ); ?>
    <?php get_script( ['script_type'=>'css', 'file_name'=>'custom'] ); ?>

    <!-- JS -->
    <?php get_script( ['script_type'=>'js', 'file_name'=>'backend/jquery'] ); ?>
    <?php get_script( ['script_type'=>'js', 'file_name'=>'tmi.min'] ); ?>
    <?php get_script( ['script_type'=>'js', 'file_name'=>''] ); ?>

</head>

<body class="theme-dark-hc">