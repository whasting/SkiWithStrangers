# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
name            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
is_host         | boolean   | not null
photo_url       | string    | 

## events
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
body            | text      | not null
date            | date      | not null
resort_id       | integer   | not null, foreign key
host_id         | integer   | not null, foreign key

## resorts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
address         | string    | not null
