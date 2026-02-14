import {
  platform,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime,
  userInfo,
} from "node:os"; // También se puede importar todo y no especificar cada función: import os from 'node:os'

console.log(
  "Información acerca del sistema operativo donde se esta ejecutando Node",
);

console.log(platform());
console.log(arch());
console.log(cpus());
console.log(freemem() / 1024 / 1024 / 1024, "GB");
console.log(totalmem() / 1024 / 1024 / 1024, "GB");
console.log(uptime() / 60 / 60, "Horas");
console.log(userInfo());

/* 
RESUMEN: 

Información acerca del sistema operativo donde se esta ejecutando Node
linux
x64
[
  {
    model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
    speed: 3271,
    times: {
      user: 975430,
      nice: 160,
      sys: 238040,
      idle: 11143140,
      irq: 73590
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
    speed: 3269,
    times: {
      user: 811020,
      nice: 90,
      sys: 231680,
      idle: 11184790,
      irq: 160790
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
    speed: 3301,
    times: {
      user: 953670,
      nice: 150,
      sys: 231250,
      idle: 11210710,
      irq: 66950
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
    speed: 3192,
    times: {
      user: 951660,
      nice: 190,
      sys: 229850,
      idle: 11217160,
      irq: 64120
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
    speed: 2852,
    times: {
      user: 939980,
      nice: 100,
      sys: 229920,
      idle: 11217660,
      irq: 69040
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
    speed: 3201,
    times: {
      user: 992220,
      nice: 130,
      sys: 243690,
      idle: 11164620,
      irq: 65350
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
    speed: 3300,
    times: {
      user: 973670,
      nice: 110,
      sys: 228760,
      idle: 11200120,
      irq: 64470
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz',
    speed: 3224,
    times: {
      user: 970950,
      nice: 140,
      sys: 231430,
      idle: 11200860,
      irq: 63860
    }
  }
]
0.9462394714355469 GB
7.433399200439453 GB
5.957147222222222 Horas
[Object: null prototype] {
  uid: 1000,
  gid: 1000,
  username: 'juancho',
  homedir: '/home/juancho',
  shell: '/usr/bin/zsh'
}
*/
