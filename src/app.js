'use strict';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Image from '@ckeditor/ckeditor5-image/src/image';

BalloonEditor
  .create( document.querySelector( '#editor' ), {
    plugins: [ Essentials, Paragraph, Bold, Italic, Image ],
    toolbar: [ 'bold', 'italic' ]
  } )
  .then( editor => {
    console.log(Array.from( editor.ui.componentFactory.names() ))
    console.log( 'Editor was initialized', editor );
  } )
  .catch( error => {
    console.error( error.stack );
  } );
