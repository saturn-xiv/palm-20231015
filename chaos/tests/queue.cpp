#define BOOST_TEST_MODULE queue
#include <boost/test/unit_test.hpp>

#include "palm/queue.hpp"

BOOST_AUTO_TEST_CASE(rabbitmq_pub) { BOOST_CHECK_EQUAL(2 * 2, 4); }

BOOST_AUTO_TEST_CASE(rabbitmq_sub) { BOOST_CHECK_EQUAL(2 * 2, 4); }
