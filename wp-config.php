<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u428427787_JBrze' );

/** Database username */
define( 'DB_USER', 'u428427787_IxOv4' );

/** Database password */
define( 'DB_PASSWORD', 'GJ5pPNy2VS' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'd?pk=`=~Y`TxKjuYW{9Th_t`5I|5Z~DlJt_4-u}eb>)se]d(Y-*fn~m.bN8IS`g8' );
define( 'SECURE_AUTH_KEY',   '@AR!Yvoa%DvMJ% _TB0n/(]:$ib~PK>BHV&O,[pV/3{=L$x^=dhM=!2vKpxM0uq3' );
define( 'LOGGED_IN_KEY',     'b-PyDN~B#k{@q`R1}C&@VTh)XpNUu+?o&D~uDWd 8$U%#v4gOI6Wi;|:<3fAPV]d' );
define( 'NONCE_KEY',         '9E.TTQJ;s8w2I]Uf-N!MAknz/~q998uCkW+E!~(4wgT^Wb.gi=d _5@q[lp-%:Q=' );
define( 'AUTH_SALT',         '0};FCcOYBsC*P=`]@0T1+qkn]ZEzJ@-wpS3^q-6vj,I|MltrYT[@,+$x=2R(pp%L' );
define( 'SECURE_AUTH_SALT',  '[~ q2jatXmaekxD_Z(]bRl5XtoK_x*&l=?vU.7/TAHr|3]%F),0A>F[[WqfK?tu~' );
define( 'LOGGED_IN_SALT',    '&nvR]Q:py3.3,~c4G5qpl7>f gII:mds9+xkJX6&h0dc7x~d_# Hg5zp]A8r2O}c' );
define( 'NONCE_SALT',        'OrF(dx)j={xlUfj?|Ei#hZN^Y~Jc[C(a1]aPe^61Xp!hP~iXEOn)Op,?gzln|jmp' );
define( 'WP_CACHE_KEY_SALT', '%_LYFt g]^;`Dnb}O2hfloh[c,|]&[9+wU )+}(yA7J}ygB#zi3^?&yr_/:PwH[P' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
