<?php
	$name = $_POST['popinp'];
	$data = array();
	$data['status'] = 'OK';

	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = '��������� ���!';
	}else{
		$data['status'] = 'OK';
		$data['text'] = '������� ���������';
	}
  	header("Content-Type: application/json");
  	echo json_encode($data);
  	exit;
?>