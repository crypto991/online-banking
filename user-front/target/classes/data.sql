insert into role values(1,'ROLE_USER');
insert into role values(2,'ROLE_ADMIN');

insert into primary_account values(1,0.0,0.0);
insert into savings_account values(1,0.0,0.0);

insert into user values (1, 'email@gmail.com', true,'djordje',
'perovic','$2y$12$viU1vZZ75HEjkchikpNYneFLxwfhqyLXnUUdi3MtgkFhr3W9kP8Jy','065828272','admin',1,1);

insert into user_role values (1,2,1);
