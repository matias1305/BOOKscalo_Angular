// Interface libro
export interface Books{
	author:string;
	title:string;
	editorial:string;
	type:string;
	genres:Array<string>;
	language:string;
	comment:string;
	num_page:number;
	original:boolean;
	transaction:string;
	user:any;
	price?:number;
	images?:Array<string>;
};

// Interface users
export interface Users{
	rut:string;
	name:string;
	last_name1:string;
	last_name2:string;
	email:string;
	commune:string;
	phone:string;
	ranking:number;
	favs_genres:Array<string>
	image?:string;
};