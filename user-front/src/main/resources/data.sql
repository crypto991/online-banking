insert into role(role_id,name) values(1,'ROLE_USER');
insert into role(role_id,name) values(2,'ROLE_ADMIN');

insert into primary_account(id,account_balance,account_number)values(1,0.0,0.0);
insert into savings_account(id,account_balance,account_number)values(1,0.0,0.0);

insert into user(user_id, email,enabled,first_name,last_name,password,
phone,username,primary_account_id,savings_account_id) values (1, 'email@gmail.com', true,'djordje',
'perovic','$2y$12$viU1vZZ75HEjkchikpNYneFLxwfhqyLXnUUdi3MtgkFhr3W9kP8Jy','065828272','admin',1,1);

insert into user_role(user_role_id,role_id,user_id)values (1,2,1);
