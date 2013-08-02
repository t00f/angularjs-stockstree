'use strict';

angular.module('stockApp').controller('StocksCtrl', ['$scope', function ($scope) {
    $scope.stocks = [
                        {id:4, date: '19/01/2001', nb_tubes:8, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}, comment:"Réservé pour Christophe", childs: [
                            {id:8, date: '27/09/2004', nb_tubes:4, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}, childs: [
                                {id:18, date: '22/04/2005', nb_tubes:5, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}},
                                {id:11, date: '24/04/2005', nb_tubes:8, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}, childs: [
                                    {id:108, date: '18/04/2006', nb_tubes:7, last_mra_treatment:{status:"MRA", date:'21/01/2008'}},
                                    {id:101, date: '19/04/2006', nb_tubes:6, last_mra_treatment:{status:"MRA", date:'21/01/2009'}},
                                    {id:804, date: '20/04/2006', nb_tubes:2, trypsine_passes:2}
                                    ]},
                                {id:84, date: '28/04/2005', nb_tubes:10, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}}
                                ]},
                            {id:41, date: '30/09/2004', nb_tubes:4, childs: [
                                {id:1008, date: '18/04/2006', nb_tubes:12, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}},
                                {id:1001, date: '19/04/2006', nb_tubes:8, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}},
                                {id:8004, date: '20/04/2006', nb_tubes:10, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}}
                                ]},
                            {id:12, date: '03/10/2004', nb_tubes:1, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}}
                            ]},
                        {id:5, date: '21/01/2001', nb_tubes:4, childs: [
                            {id:51, date: '27/09/2004', nb_tubes:6, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}, childs: [
                                {id:52, date: '22/04/2005', nb_tubes:8, trypsine_passes:4, last_mra_treatment:{status:"Myco-", date:'21/08/2005'}, comment:"Do not touch this"},
                                {id:54, date: '24/04/2005', nb_tubes:8, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'12/10/2005'}},
                                {id:55, date: '28/04/2005', nb_tubes:6, trypsine_passes:3, last_mra_treatment:{status:"Myco-", date:'11/11/2005'}}
                                ]},
                            {id:91, date: '30/09/2004', nb_tubes:7, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'},},
                            {id:98, date: '03/10/2004', nb_tubes:7}
                            ]},
                        {id:6, date: '23/01/2001', nb_tubes:8, trypsine_passes:5, last_mra_treatment:{status:"Myco-", date:'21/01/2005'}}
                    ];
}]);