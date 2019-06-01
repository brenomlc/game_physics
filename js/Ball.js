function Ball(px,py,vx,vy,ma,ra,re,ax,ay){
	var position = {x: px, y: py};
	var velocity = {x: vx, y: vy};
	var mass = ma; //kg
	var radius = ra; // 1px = 1cm
	var restitution = re;
	var acceleration = {x: ax, y: ay};
		
	this.getPosition = getPosition;
	function getPosition(){
		return position;	
	}
		
	this.getVelocity = getVelocity;
	function getVelocity(){
		return velocity;	
	}
	
	this.getAcceleration = getAcceleration;
	function getAcceleration(){
		return acceleration;	
	}
		
	this.getMass = getMass;
	function getMass(){
		return mass;	
	}
		
	this.getRadius = getRadius;
	function getRadius(){
		return radius;	
	}
		
	this.getRestitution = getRestitution;
	function getRestitution(){
		return restitution;	
	}
		
	this.setPositionX = setPositionX;
	function setPositionX(value){
		position.x = value;	
	}
		
	this.setPositionY = setPositionY;
	function setPositionY(value){
		position.y = value;	
	}
		
	this.setVelocityX = setVelocityX;
	function setVelocityX(value){
		velocity.x = value;	
	}
		
	this.setVelocityY = setVelocityY;
	function setVelocityY(value){
		velocity.y = value;	
	}
		
	this.setMass = setMass;
	function setMass(value){
		mass = value;	
	}
		
	this.setRadius = setRadius;
	function setRadius(value){
		radius = value;	
	}
		
	this.setRestitution = setRestitution;
	function setRestitution(value){
		restitution = value;	
	}
	
	this.setAccelerationX = setAccelerationX;
	function setAccelerationX(value){
		acceleration.x = value;	
	}
	
	this.setAccelerationY = setAccelerationY;
	function setAccelerationY(value){
		acceleration.y = value;	
	}
}