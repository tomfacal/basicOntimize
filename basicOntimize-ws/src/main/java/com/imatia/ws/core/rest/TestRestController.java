package com.imatia.ws.core.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.imatia.openapi.core.service.ITestApi;

@RestController
public class TestRestController implements ITestApi {

	@Override
	public ResponseEntity<String> testRest() {
		return new ResponseEntity<>("It Works!", HttpStatus.OK);
	}

}
