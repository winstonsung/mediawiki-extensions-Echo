var Overlay = mw.mobileFrontend.require( 'mobile.startup' ).Overlay;

/**
 * Overlay for notifications filter
 *
 * @class NotificationsFilterOverlay
 * @param {Object} options
 * @param {Function} options.onBeforeExit executes before overlay closes
 * @param {jQuery.Object} options.$notifReadState - notification read status widgets
 * @param {jQuery.Object} options.$crossWikiUnreadFilter - notification unread filter
 *
 */
function notificationsFilterOverlay( options ) {
	var $content;
	// Initialize
	options.$crossWikiUnreadFilter.on( 'click', function () {
		self.hide();
	} );

	options.$notifReadState.find( '.oo-ui-buttonElement' ).on( 'click', function () {
		self.hide();
	} );

	$content = $( '<div>' ).append(
		$( '<div>' )
			.addClass( 'notifications-filter-overlay-read-state' )
			.append( options.$notifReadState ),
		options.$crossWikiUnreadFilter
	);

	return Overlay.make( {
		onBeforeExit: options.onBeforeExit,
		heading: '<strong>' + mw.message( 'echo-mobile-notifications-filter-title' ).escaped() + '</strong>',
		className: 'overlay notifications-filter-overlay notifications-overlay navigation-drawer'
	}, { $el: $content } );
}

module.exports = notificationsFilterOverlay;
