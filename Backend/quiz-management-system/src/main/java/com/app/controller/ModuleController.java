package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.ModuleService;

@RestController
public class ModuleController {
	@Autowired
	private ModuleService service;
}
