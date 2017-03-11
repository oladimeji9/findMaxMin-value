var FindMinMax = require("../app/findMinMax");

(function () {
    'use strict';

    describe('Min-Max Numbers in a List: ', function () {

        describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

            it('should return [1,4] for [1, 2, 3 , 4]', function () {
                expect(FindMinMax.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
            });

            it('should return [4, 6] for [6, 4]', function () {
                expect(FindMinMax.findMinMax([6, 4])).toEqual([4, 6]);
            });

            it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
                expect(FindMinMax.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
            });

            it('should return [2, 9] for [7, 8, 9, 6, 2]', function () {
                expect(FindMinMax.findMinMax([7, 8, 9, 6, 2])).toEqual([2, 9]);
            });

            it('should return [2, 43] for [5,7,2,43,6,2,3]', function () {
                expect(FindMinMax.findMinMax([5,7,2,43,6,2,3])).toEqual([2, 43]);
            });

            it('should return [5, 78] for [78, 8, 68, 5]', function () {
                expect(FindMinMax.findMinMax([78, 8, 68, 5])).toEqual([5, 78]);
            });

            it('should return [23, 400] for [54,32,900,4000,23,43,800]', function () {
                expect(FindMinMax.findMinMax([54,32,900,4000,23,43,800])).toEqual([23, 4000]);
            });

            it('should return [0, 512] for [512, 0]', function () {
                expect(FindMinMax.findMinMax([78, 8, 68, 5])).toEqual([5, 78]);
            });

        });

        describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

            it('should return [4] for [4, 4, 4, 4]', function () {
                expect(FindMinMax.findMinMax([4, 4, 4, 4])).toEqual([4]);
            });

            it('should return [3] for [3]', function () {
                expect(FindMinMax.findMinMax([3])).toEqual([3]);
            });

        });

    });

})();