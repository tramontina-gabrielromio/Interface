const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Ferramenta")
const Ferramenta = mongoose.model("ferramentas")
const novaFerramenta = new Array(100)

require("../models/Evento")
const Evento = mongoose.model("eventos")

//Ferramentas gaveta 1
novaFerramenta[1] = {
  descricao: 'Chave catraca 9/16x5/8 - 11/16x3/4',
  referencia: '44641103',
  gaveta: 1,
  posicao: 1,
  estado: 1,
  desconhecido: 0}
novaFerramenta[2] = {
  descricao: 'Chave catraca 5/16x3/8 - 7/16x1/2',
  referencia: '44641101',
  gaveta: 1,
  posicao: 2,
  estado: 1,
  desconhecido: 0}
novaFerramenta[3] = {
  descricao: 'Chave combinada 1',
  referencia: '44670113',
  gaveta: 1,
  posicao: 3,
  estado: 1,
  desconhecido: 0}
novaFerramenta[4] = {
  descricao: 'Chave combinada 7/8',
  referencia: '44670111',
  gaveta: 1,
  posicao: 4,
  estado: 1,
  desconhecido: 0}
novaFerramenta[5] = {
  descricao: 'Chave combinada 11/16',
  referencia: '44670107',
  gaveta: 1,
  posicao: 5,
  estado: 1,
  desconhecido: 0}
novaFerramenta[6] = {
  descricao: 'Chave combinada 9/16',
  referencia: '44670105',
  gaveta: 1,
  posicao: 6,
  estado: 1,
  desconhecido: 0}
novaFerramenta[7] = {
  descricao: 'Chave combinada 1/2',
  referencia: '44670104',
  gaveta: 1,
  posicao: 7,
  estado: 1,
  desconhecido: 0}
novaFerramenta[8] = {
  descricao: 'Chave combinada 3/8',
  referencia: '44670102',
  gaveta: 1,
  posicao: 8,
  estado: 1,
  desconhecido: 0}
novaFerramenta[9] = {
  descricao: 'Alicate diagonal corte rente p/ plastico 6',
  referencia: '44002126',
  gaveta: 1,
  posicao: 9,
  estado: 1,
  desconhecido: 0}
novaFerramenta[10] = {
  descricao: 'Alicate diagonal 6',
  referencia: '44003106',
  gaveta: 1,
  posicao: 10,
  estado: 1,
  desconhecido: 0}
novaFerramenta[11] = {
  descricao: 'Alicate para arame de segurança 9',
  referencia: '44060101',
  gaveta: 1,
  posicao: 11,
  estado: 1,
  desconhecido: 0}
novaFerramenta[12] = {
  descricao: 'Adaptador 3/8 para 1/4',
  referencia: '44827104',
  gaveta: 1,
  posicao: 12,
  estado: 1,
  desconhecido: 0}
novaFerramenta[13] = {
  descricao: 'Adaptador 1/4 para 3/8',
  referencia: '44801101',
  gaveta: 1,
  posicao: 13,
  estado: 1,
  desconhecido: 0}
novaFerramenta[14] = {
  descricao: 'Soquete sextavado 1/4 - 11/32',
  referencia: '44806106',
  gaveta: 1,
  posicao: 14,
  estado: 1,
  desconhecido: 0}
novaFerramenta[15] = {
  descricao: 'Soquete sextavado 1/4 - 5/16',
  referencia: '44806105',
  gaveta: 1,
  posicao: 15,
  estado: 1,
  desconhecido: 0}
novaFerramenta[16] = {
  descricao: 'Soquete sextavado 1/4 - 1/4',
  referencia: '44806103',
  gaveta: 1,
  posicao: 16,
  estado: 1,
  desconhecido: 0}
novaFerramenta[17] = {
  descricao: 'Extensão 1/4 4',
  referencia: '44804104',
  gaveta: 1,
  posicao: 17,
  estado: 1,
  desconhecido: 0}
novaFerramenta[18] = {
  descricao: 'Soquete sextavado longo 1/4 - 7/16',
  referencia: '44808108',
  gaveta: 1,
  posicao: 18,
  estado: 1,
  desconhecido: 0}
novaFerramenta[19] = {
  descricao: 'Soquete sextavado longo 1/4 - 3/8',
  referencia: '44808107',
  gaveta: 1,
  posicao: 19,
  estado: 1,
  desconhecido: 0}
novaFerramenta[20] = {
  descricao: 'Soquete estriado 1/4 - 1/2',
  referencia: '44810109',
  gaveta: 1,
  posicao: 20,
  estado: 1,
  desconhecido: 0}
novaFerramenta[21] = {
  descricao: 'Alicate curvo 8',
  referencia: '44004181',
  gaveta: 1,
  posicao: 21,
  estado: 1,
  desconhecido: 0}
novaFerramenta[22] = {
  descricao: 'Catraca 1/4 6',
  referencia: '44804100',
  gaveta: 1,
  posicao: 22,
  estado: 1,
  desconhecido: 0}
novaFerramenta[23] = {
  descricao: 'Chave de fenda ponta chata 6x100 - 1/4x4',
  referencia: '44130030',
  gaveta: 1,
  posicao: 23,
  estado: 1,
  desconhecido: 0}
novaFerramenta[24] = {
  descricao: 'Chave de fenda ponta chata 6x100 - 1/4x4',
  referencia: '44130030',
  gaveta: 1,
  posicao: 24,
  estado: 1,
  desconhecido: 0}
novaFerramenta[25] = {
  descricao: 'Chave de fenda ponta cruzada 5x100 - 3/16x4',
  referencia: '44135021',
  gaveta: 1,
  posicao: 25,
  estado: 1,
  desconhecido: 0}
novaFerramenta[26] = {
  descricao: 'Chave de fenda ponta cruzada 6x150 - 1/4x6',
  referencia: '44135031',
  gaveta: 1,
  posicao: 26,
  estado: 1,
  desconhecido: 0}

//Ferramentas gaveta 2
novaFerramenta[27] = {
  descricao: 'Alicate diagonal 6',
  referencia: '44003106',
  gaveta: 2,
  posicao: 1,
  estado: 1,
  desconhecido: 0}
novaFerramenta[28] = {
  descricao: 'Chave toco ponta chata 5x38 - 3/16x1.1/2',
  referencia: '44132001',
  gaveta: 2,
  posicao: 2,
  estado: 1,
  desconhecido: 0}
novaFerramenta[29] = {
  descricao: 'Adaptador 3/8 para 1/4',
  referencia: '44827104',
  gaveta: 2,
  posicao: 3,
  estado: 1,
  desconhecido: 0}
novaFerramenta[30] = {
  descricao: 'Adaptador 1/4 para 3/8',
  referencia: '44801101',
  gaveta: 2,
  posicao: 4,
  estado: 1,
  desconhecido: 0}
novaFerramenta[31] = {
  descricao: 'Soquete ponta hexagonal 3/8 8mm',
  referencia: '44812108',
  gaveta: 2,
  posicao: 5,
  estado: 1,
  desconhecido: 0}
novaFerramenta[32] = {
  descricao: 'Soquete ponta hexagonal 3/8 7mm',
  referencia: '44812107',
  gaveta: 2,
  posicao: 6,
  estado: 1,
  desconhecido: 0}
novaFerramenta[33] = {
  descricao: 'Soquete ponta hexagonal 3/8 6mm',
  referencia: '44812106',
  gaveta: 2,
  posicao: 7,
  estado: 1,
  desconhecido: 0}
novaFerramenta[34] = {
  descricao: 'Chave de fenda ponta chata 1,5mm',
  referencia: '44052901',
  gaveta: 2,
  posicao: 8,
  estado: 1,
  desconhecido: 0}
novaFerramenta[35] = {
  descricao: 'Chave de fenda ponta chata 2mm',
  referencia: '44052902',
  gaveta: 2,
  posicao: 9,
  estado: 1,
  desconhecido: 0}
novaFerramenta[36] = {
  descricao: 'Chave de fenda ponta chata 2,5mm',
  referencia: '44052903',
  gaveta: 2,
  posicao: 10,
  estado: 1,
  desconhecido: 0}
novaFerramenta[37] = {
  descricao: 'Chave de fenda ponta chata 3mm',
  referencia: '44052904',
  gaveta: 2,
  posicao: 11,
  estado: 1,
  desconhecido: 0}
novaFerramenta[38] = {
  descricao: 'Chave de fenda ponta cruzada 3mm',
  referencia: '44052905',
  gaveta: 2,
  posicao: 12,
  estado: 1,
  desconhecido: 0}
novaFerramenta[39] = {
  descricao: 'Chave de fenda ponta cruzada 4mm',
  referencia: '44052906',
  gaveta: 2,
  posicao: 13,
  estado: 1,
  desconhecido: 0}
novaFerramenta[40] = {
  descricao: 'Chave combinada 11/16',
  referencia: '44670107',
  gaveta: 2,
  posicao: 14,
  estado: 1,
  desconhecido: 0}
novaFerramenta[41] = {
  descricao: 'Chave combinada 1/2',
  referencia: '44670104',
  gaveta: 2,
  posicao: 15,
  estado: 1,
  desconhecido: 0}
novaFerramenta[42] = {
  descricao: 'Chave combinada 3/8',
  referencia: '44670102',
  gaveta: 2,
  posicao: 16,
  estado: 1,
  desconhecido: 0}
novaFerramenta[43] = {
  descricao: 'Alicate para arame de segurança 9',
  referencia: '44060101',
  gaveta: 2,
  posicao: 17,
  estado: 1,
  desconhecido: 0}
novaFerramenta[44] = {
  descricao: 'Soquete ponta hexagonal 3/8 5mm',
  referencia: '44812105',
  gaveta: 2,
  posicao: 18,
  estado: 1,
  desconhecido: 0}
novaFerramenta[45] = {
  descricao: 'Soquete ponta hexagonal 3/8 4mm',
  referencia: '44812104',
  gaveta: 2,
  posicao: 19,
  estado: 1,
  desconhecido: 0}
novaFerramenta[46] = {
  descricao: 'Soquete ponta hexagonal 3/8 3mm',
  referencia: '44812103',
  gaveta: 2,
  posicao: 20,
  estado: 1,
  desconhecido: 0}
novaFerramenta[47] = {
  descricao: 'Soquete sextavado longo 1/4 - 7/16',
  referencia: '44808108',
  gaveta: 2,
  posicao: 21,
  estado: 1,
  desconhecido: 0}
novaFerramenta[48] = {
  descricao: 'Soquete sextavado longo 1/4 - 5/16',
  referencia: '44808105',
  gaveta: 2,
  posicao: 22,
  estado: 1,
  desconhecido: 0}
novaFerramenta[49] = {
  descricao: 'Soquete sextavado 1/4 - 1/4',
  referencia: '44806103',
  gaveta: 2,
  posicao: 23,
  estado: 1,
  desconhecido: 0}
novaFerramenta[50] = {
  descricao: 'Chave combinada 1/4',
  referencia: '44670100',
  gaveta: 2,
  posicao: 24,
  estado: 1,
  desconhecido: 0}
novaFerramenta[51] = {
  descricao: 'Alicate curvo 8',
  referencia: '44004181',
  gaveta: 2,
  posicao: 25,
  estado: 1,
  desconhecido: 0}
novaFerramenta[52] = {
  descricao: 'Catraca 1/4 6',
  referencia: '44804100',
  gaveta: 2,
  posicao: 26,
  estado: 1,
  desconhecido: 0}
novaFerramenta[53] = {
  descricao: 'Catraca 3/8 8',
  referencia: '44826108',
  gaveta: 2,
  posicao: 27,
  estado: 1,
  desconhecido: 0}
novaFerramenta[54] = {
  descricao: 'Martelo de borda TPU 30mm',
  referencia: '40670032',
  gaveta: 2,
  posicao: 28,
  estado: 1,
  desconhecido: 0}
  
//Ferramentas gaveta 3
novaFerramenta[55] = {
  descricao: 'Chave toco ponta cruzada 5x38 - 3/16x1.1/2',
  referencia: '44137001',
  gaveta: 3,
  posicao: 1,
  estado: 1,
  desconhecido: 0}
novaFerramenta[56] = {
  descricao: 'Alicate diagonal 6',
  referencia: '44003106',
  gaveta: 3,
  posicao: 2,
  estado: 1,
  desconhecido: 0}
novaFerramenta[57] = {
  descricao: 'Chave catraca 5/16x3/8 - 7/16x1/2',
  referencia: '44641101',
  gaveta: 3,
  posicao: 3,
  estado: 1,
  desconhecido: 0}
novaFerramenta[58] = {
  descricao: 'Soquete sextavado 1/4 - 5/16',
  referencia: '44806105',
  gaveta: 3,
  posicao: 4,
  estado: 1,
  desconhecido: 0}
novaFerramenta[59] = {
  descricao: 'Soquete sextavado 1/4 - 1/4',
  referencia: '44806103',
  gaveta: 3,
  posicao: 5,
  estado: 1,
  desconhecido: 0}
novaFerramenta[60] = {
  descricao: 'Catraca 1/4 6',
  referencia: '44804100',
  gaveta: 3,
  posicao: 6,
  estado: 1,
  desconhecido: 0}
novaFerramenta[61] = {
  descricao: 'Catraca 1/4 6',
  referencia: '44804100',
  gaveta: 3,
  posicao: 7,
  estado: 1,
  desconhecido: 0}
novaFerramenta[62] = {
  descricao: 'Chave combinada 9/16',
  referencia: '44670105',
  gaveta: 3,
  posicao: 8,
  estado: 1,
  desconhecido: 0}
novaFerramenta[63] = {
  descricao: 'Chave combinada 9/16',
  referencia: '44670105',
  gaveta: 3,
  posicao: 9,
  estado: 1,
  desconhecido: 0}
novaFerramenta[64] = {
  descricao: 'Chave combinada 1/2',
  referencia: '44670104',
  gaveta: 3,
  posicao: 10,
  estado: 1,
  desconhecido: 0}
novaFerramenta[65] = {
  descricao: 'Chave combinada 7/16',
  referencia: '44670103',
  gaveta: 3,
  posicao: 11,
  estado: 1,
  desconhecido: 0}
novaFerramenta[66] = {
  descricao: 'Chave combinada 3/8',
  referencia: '44670102',
  gaveta: 3,
  posicao: 12,
  estado: 1,
  desconhecido: 0}
novaFerramenta[67] = {
  descricao: 'Chave combinada 1/4',
  referencia: '44670100',
  gaveta: 3,
  posicao: 13,
  estado: 1,
  desconhecido: 0}
novaFerramenta[68] = {
  descricao: 'Alicate para anéis internos curvo 7',
  referencia: '44009107',
  gaveta: 3,
  posicao: 14,
  estado: 1,
  desconhecido: 0}
novaFerramenta[69] = {
  descricao: 'Alicate para arame de segurança 9',
  referencia: '44060101',
  gaveta: 3,
  posicao: 15,
  estado: 1,
  desconhecido: 0}
novaFerramenta[70] = {
  descricao: 'Chave catraca 9/16x5/8 - 11/16x3/4',
  referencia: '44641103',
  gaveta: 3,
  posicao: 16,
  estado: 1,
  desconhecido: 0}
novaFerramenta[71] = {
  descricao: 'Alicate meia cana reto dupla injeção',
  referencia: '44004183',
  gaveta: 3,
  posicao: 17,
  estado: 1,
  desconhecido: 0}
novaFerramenta[72] = {
  descricao: 'Alicate para anéis internos reto 7',
  referencia: '44008107',
  gaveta: 3,
  posicao: 18,
  estado: 1,
  desconhecido: 0}
novaFerramenta[73] = {
  descricao: 'Alicate para anéis externos curvo 7',
  referencia: '44011107',
  gaveta: 3,
  posicao: 19,
  estado: 1,
  desconhecido: 0}
novaFerramenta[74] = {
  descricao: 'Alicate para anéis externos reto 7',
  referencia: '44010107',
  gaveta: 3,
  posicao: 20,
  estado: 1,
  desconhecido: 0}
novaFerramenta[75] = {
  descricao: 'Martelo sem retrocesso 500g',
  referencia: '40673037',
  gaveta: 3,
  posicao: 21,
  estado: 1,
  desconhecido: 0}
novaFerramenta[76] = {
  descricao: 'Martelo de borda TPU 30mm',
  referencia: '40670032',
  gaveta: 3,
  posicao: 22,
  estado: 1,
  desconhecido: 0}

//Ferramentas gaveta 4
novaFerramenta[77] = {
  descricao: 'Chave combinada 7/8',
  referencia: '44670111',
  gaveta: 4,
  posicao: 1,
  estado: 1,
  desconhecido: 0}
novaFerramenta[78] = {
  descricao: 'Chave combinada 13/16',
  referencia: '44670110',
  gaveta: 4,
  posicao: 2,
  estado: 1,
  desconhecido: 0}
novaFerramenta[79] = {
  descricao: 'Alicate para arame de segurança 9',
  referencia: '44060101',
  gaveta: 4,
  posicao: 3,
  estado: 1,
  desconhecido: 0}
novaFerramenta[80] = {
  descricao: 'Alicate meia cana curvo dupla injeção',
  referencia: '44004181',
  gaveta: 4,
  posicao: 4,
  estado: 1,
  desconhecido: 0}
novaFerramenta[81] = {
  descricao: 'Chave combinada 1.1/8',
  referencia: '44670115',
  gaveta: 4,
  posicao: 5,
  estado: 1,
  desconhecido: 0}
novaFerramenta[82] = {
  descricao: 'Soquete estriado 1/4 5mm',
  referencia: '44809105',
  gaveta: 4,
  posicao: 6,
  estado: 1,
  desconhecido: 0}
novaFerramenta[83] = {
  descricao: 'Soquete estriado 1/4 5.5mm',
  referencia: '44809155',
  gaveta: 4,
  posicao: 7,
  estado: 1,
  desconhecido: 0}
novaFerramenta[84] = {
  descricao: 'Soquete sextavado longo 1/4 - 7/16',
  referencia: '44808108',
  gaveta: 4,
  posicao: 8,
  estado: 1,
  desconhecido: 0}
novaFerramenta[85] = {
  descricao: 'Soquete sextavado longo 1/4 - 3/8',
  referencia: '44808107',
  gaveta: 4,
  posicao: 9,
  estado: 1,
  desconhecido: 0}
novaFerramenta[86] = {
  descricao: 'Soquete sextavado longo 1/4 - 5/16',
  referencia: '44808105',
  gaveta: 4,
  posicao: 10,
  estado: 1,
  desconhecido: 0}
novaFerramenta[87] = {
  descricao: 'Soquete sextavado longo 1/4 - 1/4',
  referencia: '44808103',
  gaveta: 4,
  posicao: 11,
  estado: 1,
  desconhecido: 0}
novaFerramenta[88] = {
  descricao: 'Alicate diagonal 6',
  referencia: '44003106',
  gaveta: 4,
  posicao: 12,
  estado: 1,
  desconhecido: 0}
novaFerramenta[89] = {
  descricao: 'Catraca 1/4 6',
  referencia: '44804100',
  gaveta: 4,
  posicao: 13,
  estado: 1,
  desconhecido: 0}
novaFerramenta[90] = {
  descricao: 'Catraca 3/8 8',
  referencia: '44826108',
  gaveta: 4,
  posicao: 14,
  estado: 1,
  desconhecido: 0}

//Ferramentas gaveta 5
novaFerramenta[91] = {
  descricao: 'Chave de fenda ponta cruzada 6x250 - 1/4x10',
  referencia: '44135033',
  gaveta: 5,
  posicao: 1,
  estado: 1,
  desconhecido: 0}
novaFerramenta[92] = {
  descricao: 'Chave de fenda ponta cruzada 6x150 - 1/4x6',
  referencia: '44135031',
  gaveta: 5,
  posicao: 2,
  estado: 1,
  desconhecido: 0}
novaFerramenta[93] = {
  descricao: 'Chave de fenda ponta chata 6x100 -1/4x4',
  referencia: '44130030',
  gaveta: 5,
  posicao: 3,
  estado: 1,
  desconhecido: 0}
novaFerramenta[94] = {
  descricao: 'Chave catraca 9/16x5/8 - 11/16x3/4',
  referencia: '44641103',
  gaveta: 5,
  posicao: 4,
  estado: 1,
  desconhecido: 0}
novaFerramenta[95] = {
  descricao: 'Chave catraca 5/16x3/8 - 7/16x1/2',
  referencia: '44641101',
  gaveta: 5,
  posicao: 5,
  estado: 1,
  desconhecido: 0}
novaFerramenta[96] = {
  descricao: 'Tesoura para costura 25,4cm 25926/160',
  referencia: '25926160',
  gaveta: 5,
  posicao: 6,
  estado: 1,
  desconhecido: 0}
novaFerramenta[97] = {
  descricao: 'Martelo de borda TPU 30mm',
  referencia: '40670032',
  gaveta: 5,
  posicao: 7,
  estado: 1,
  desconhecido: 0}

//Ferramentas gaveta 6
novaFerramenta[98] = {
  descricao: 'Adaptador 1/4 para 3/8',
  referencia: '44801101',
  gaveta: 6,
  posicao: 1,
  estado: 1,
  desconhecido: 0}
novaFerramenta[99] = {
  descricao: 'Adaptador 3/8 para 1/4',
  referencia: '44827104',
  gaveta: 6,
  posicao: 2,
  estado: 1,
  desconhecido: 0}
novaFerramenta[100] = {
  descricao: 'Soquete sextavado 1/4 - 1/4',
  referencia: '44806103',
  gaveta: 6,
  posicao: 3,
  estado: 1,
  desconhecido: 0}
novaFerramenta[101] = {
  descricao: 'Soquete estriado longo 3/8 - 7/8',
  referencia: '44869109',
  gaveta: 6,
  posicao: 4,
  estado: 1,
  desconhecido: 0}
novaFerramenta[102] = {
  descricao: 'Catraca 1/4 6',
  referencia: '44804100',
  gaveta: 6,
  posicao: 5,
  estado: 1,
  desconhecido: 0}
novaFerramenta[103] = {
  descricao: 'Extensão 1/4 4',
  referencia: '44804104',
  gaveta: 6,
  posicao: 6,
  estado: 1,
  desconhecido: 0}
novaFerramenta[104] = {
  descricao: 'Alicate universal CuBe 8',
  referencia: '44222008',
  gaveta: 6,
  posicao: 7,
  estado: 1,
  desconhecido: 0}
novaFerramenta[105] = {
  descricao: 'Alicate corte diagonal CuBe 6',
  referencia: '44223106',
  gaveta: 6,
  posicao: 8,
  estado: 1,
  desconhecido: 0}
novaFerramenta[106] = {
  descricao: 'Chave catraca 9/16x5/8 - 11/16x3/4',
  referencia: '44641103',
  gaveta: 6,
  posicao: 9,
  estado: 1,
  desconhecido: 0}
novaFerramenta[107] = {
  descricao: 'Chave catraca 5/16x3/8 - 7/16x1/2',
  referencia: '44641101',
  gaveta: 6,
  posicao: 10,
  estado: 1,
  desconhecido: 0}
novaFerramenta[108] = {
  descricao: 'Alicate meia cana CuBe 6',
  referencia: '44225006',
  gaveta: 6,
  posicao: 11,
  estado: 1,
  desconhecido: 0}
novaFerramenta[109] = {
  descricao: 'Chave fenda ponta cruzada CuBe Nr. 0',
  referencia: '44229010',
  gaveta: 6,
  posicao: 12,
  estado: 1,
  desconhecido: 0}
novaFerramenta[110] = {
  descricao: 'Chave fenda ponta cruzada 5x75 - 3/16x3',
  referencia: '44135020',
  gaveta: 6,
  posicao: 13,
  estado: 1,
  desconhecido: 0}
novaFerramenta[111] = {
  descricao: 'Chave fenda ponta cruzada CuBe Nr. 2',
  referencia: '44229031',
  gaveta: 6,
  posicao: 14,
  estado: 1,
  desconhecido: 0}
novaFerramenta[112] = {
  descricao: 'Chave fenda ponta cruzada 6x125 - 1/4x5',
  referencia: '44135029',
  gaveta: 6,
  posicao: 15,
  estado: 1,
  desconhecido: 0}
novaFerramenta[113] = {
  descricao: 'Alicate para arame de segurança 9',
  referencia: '44060101',
  gaveta: 6,
  posicao: 16,
  estado: 1,
  desconhecido: 0}

//Ferramentas gaveta 7
novaFerramenta[114] = {
  descricao: 'Espatula chata',
  referencia: '44745027',
  gaveta: 7,
  posicao: 1,
  estado: 1,
  desconhecido: 0}
novaFerramenta[115] = {
  descricao: 'Espatula chata',
  referencia: '44745027',
  gaveta: 7,
  posicao: 2,
  estado: 1,
  desconhecido: 0}
novaFerramenta[116] = {
  descricao: 'Chave tubo mod. americano 10”',
  referencia: '44085010',
  gaveta: 7,
  posicao: 3,
  estado: 1,
  desconhecido: 0}
novaFerramenta[117] = {
  descricao: 'Arco de serra',
  referencia: '44032012',
  gaveta: 7,
  posicao: 4,
  estado: 1,
  desconhecido: 0}
novaFerramenta[118] = {
  descricao: 'Chave tubo mod. americano 18”',
  referencia: '44085018',
  gaveta: 7,
  posicao: 5,
  estado: 1,
  desconhecido: 0}
novaFerramenta[119] = {
  descricao: 'Espatula redonda 600mm',
  referencia: '44747060',
  gaveta: 7,
  posicao: 6,
  estado: 1,
  desconhecido: 0}
novaFerramenta[120] = {
  descricao: 'Espatula redonda 600mm',
  referencia: '44747060',
  gaveta: 7,
  posicao: 7,
  estado: 1,
  desconhecido: 0}
novaFerramenta[121] = {
  descricao: 'Espatula redonda 600mm',
  referencia: '44747060',
  gaveta: 7,
  posicao: 8,
  estado: 1,
  desconhecido: 0}
novaFerramenta[122] = {
  descricao: 'Espatula redonda 600mm',
  referencia: '44747060',
  gaveta: 7,
  posicao: 9,
  estado: 1,
  desconhecido: 0}
novaFerramenta[123] = {
  descricao: 'Espatula redonda 600mm',
  referencia: '44747060',
  gaveta: 7,
  posicao: 10,
  estado: 1,
  desconhecido: 0}
novaFerramenta[124] = {
  descricao: 'Espatula redonda 600mm',
  referencia: '44747060',
  gaveta: 7,
  posicao: 11,
  estado: 1,
  desconhecido: 0}
novaFerramenta[125] = {
  descricao: 'Espatula redonda 600mm',
  referencia: '44747060',
  gaveta: 7,
  posicao: 12,
  estado: 1,
  desconhecido: 0}
novaFerramenta[126] = {
  descricao: 'Espatula redonda 600mm',
  referencia: '44747060',
  gaveta: 7,
  posicao: 13,
  estado: 1,
  desconhecido: 0}

//Ferramentas gaveta 8
novaFerramenta[127] = {
  descricao: 'Alicate para arame de segurança 9',
  referencia: '44060101',
  gaveta: 8,
  posicao: 1,
  estado: 1,
  desconhecido: 0}
novaFerramenta[128] = {
  descricao: 'Adaptador 1/4 para 3/8',
  referencia: '44801101',
  gaveta: 8,
  posicao: 2,
  estado: 1,
  desconhecido: 0}
novaFerramenta[129] = {
  descricao: 'Adaptador 3/8 para 1/4',
  referencia: '44827104',
  gaveta: 8,
  posicao: 3,
  estado: 1,
  desconhecido: 0}
novaFerramenta[130] = {
  descricao: 'Soquete sextavado longo 1/4 - 1/4',
  referencia: '44808103',
  gaveta: 8,
  posicao: 4,
  estado: 1,
  desconhecido: 0}
novaFerramenta[131] = {
  descricao: 'Soquete sextavado longo 1/4 - 7/16',
  referencia: '44808108',
  gaveta: 8,
  posicao: 5,
  estado: 1,
  desconhecido: 0}
novaFerramenta[132] = {
  descricao: 'Extensão 1/4 4',
  referencia: '44804104',
  gaveta: 8,
  posicao: 6,
  estado: 1,
  desconhecido: 0}
novaFerramenta[133] = {
  descricao: 'Catraca 1/4 6',
  referencia: '44804100',
  gaveta: 8,
  posicao: 7,
  estado: 1,
  desconhecido: 0}
novaFerramenta[134] = {
  descricao: 'Alicate diagonal 6',
  referencia: '44003106',
  gaveta: 8,
  posicao: 8,
  estado: 1,
  desconhecido: 0}
novaFerramenta[135] = {
  descricao: 'Alicate curvo 8',
  referencia: '44004181',
  gaveta: 8,
  posicao: 9,
  estado: 1,
  desconhecido: 0}
novaFerramenta[136] = {
  descricao: 'Trena profissional 5M',
  referencia: '43158305',
  gaveta: 8,
  posicao: 10,
  estado: 1,
  desconhecido: 0}
novaFerramenta[137] = {
  descricao: 'Chave combinada 1/2',
  referencia: '44670104',
  gaveta: 8,
  posicao: 11,
  estado: 1,
  desconhecido: 0}
novaFerramenta[138] = {
  descricao: 'Chave catraca 5/16x3/8 - 7/16x1/2',
  referencia: '44641101',
  gaveta: 8,
  posicao: 12,
  estado: 1,
  desconhecido: 0}
novaFerramenta[139] = {
  descricao: 'Chave catraca 9/16x5/8 - 11/16x3/4',
  referencia: '44641103',
  gaveta: 8,
  posicao: 13,
  estado: 1,
  desconhecido: 0}

for (var i=1; i <= 139; i++){
    new Ferramenta(novaFerramenta[i]).save();
}

/*const novoEvento = {
    referencia: '44135/041',
    descricao: 'Chave phillips 8x150mm',
    gaveta: 2,
    posicao: 1,
    dataRetirada: '25/08/2021',
    horaRetirada: '12:00',
    dataDevolucao: '25/08/2021',
    horaDevolucao: '14:00',
    usuario: 'Gabriel',
    setor: 'Automacao',
    devolucao: 1}*/

//new Evento(novoEvento).save();

module.exports = router