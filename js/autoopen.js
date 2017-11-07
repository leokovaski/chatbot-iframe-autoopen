//*******************************************//
//*******************************************//
//******* DESENVOLVIDO POR LEO KOVASKI ******//
//******* email: leokovaski@gmail.com  ******//
//*******************************************//
//*******************************************//


document.addEventListener('DOMContentLoaded', function () {

	if(!document.getElementById('flowxo')) {
		alert('Element #flowxo not found!');
		return;
	}

	var flowId = document.getElementById('flowxo').getAttribute('data-flow-id');
	var title = document.getElementById('flowxo').getAttribute('data-flow-title') || '';
	var link = document.getElementById('flowxo').getAttribute('data-flow-link') || 'javascript:void(0)';
	var logo = document.getElementById('flowxo').getAttribute('data-flow-logo') || 'javascript:void(0)';


	var withLogo = link ? '<a class="btn-logo" target="_blank" href="'+link+'"><img class="logo" src="'+logo+'"></a><h4 class="chatbox-header-text">'+title+'</h4s>' : '';
	var header = `
	<div class="chatbox-header">
		`+withLogo+`
		<button data-v-e86f6158="" class="close" id="chatbox-btnclose"><svg data-v-e86f6158="" width="24px" height="24px" viewBox="0 0 40 40" stroke="black" fill="black"><path data-v-e86f6158="" d="M 10,10 L 30,30 M 30,10 L 10,30" class="close-x"></path></svg></button>
	</div>
`;
    
    var chat = '<iframe src="https://fxo.io/m/'+flowId+'" width="100%" height="100%" style="border: 3px solid #f9f9fb; width: 100%; height: 100%;"></iframe>';
    var chatbox = '<div id="chatbox" class="chatbox">'+header + chat +'</div>';

    document.getElementById('flowxo').innerHTML = chatbox;
    

    flowXoAutoOpenInit();
});

function flowXoAutoOpenInit() {
		var chatbox = document.getElementById('chatbox');
		var chatbox_btnClose = document.getElementById('chatbox-btnclose');
		var _mMouseOver = false;

		setTimeout(function(){
			chatbox.setAttribute('class', 'chatbox middle');
		}, 2000);

		chatbox.addEventListener("mouseover", function(){
			if(_mMouseOver) 
				return;
			_mMouseOver = true;
			chatbox.setAttribute('class', 'chatbox full');
		});

		chatbox_btnClose.addEventListener("click", function(){
			chatbox.setAttribute('class', 'chatbox close');
			setTimeout(function(){
				_mMouseOver = false;
			}, 1000);
		});
}