@echo off

for %%f in (*.sql) do mysql -u root vabu < %%f