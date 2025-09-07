Feature: Demo Cucumber Tres

    Esto es un demo de como utilizar Cucumber

    Scenario: Demo de Cucumber Tres
    Given Abrir el navegador principal version 3
    When Cargamos el nombre Version 3 <Nombre> <Nombre_dos>
    When Cargamos el apellido Version 3 <Apellido>
    When Cargamos el telefono Version 3 <Telefono>
    When Cargamos la Email Version 3 <Email>
    When Cargamos la direccion Version 3 <Direccion>
    Then Validamos que se pudo enviar los datos de la persona agregada Version 3

    Examples:
        |     Nombre          | Nombre_dos  | Apellido       |  Telefono  |         Email          |    Direccion         |
        |     Eduardo         |  Alejandro  | Seijas         | 1234567890 |eduardoseijas@gmail.com | Prueba_Cucumber_3    |
        |      Lucia          |     Lucia   | Pinas          | 1234567890 |Luciaspinas@gmail.com   | Prueba_Cucumber_3_v-2|