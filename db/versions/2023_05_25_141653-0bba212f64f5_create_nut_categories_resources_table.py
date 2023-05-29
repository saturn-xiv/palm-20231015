"""create nut.categories-resources table

Revision ID: 0bba212f64f5
Revises: 0fc04a4e05c2
Create Date: 2023-05-25 14:16:53.437468

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0bba212f64f5'
down_revision = '0fc04a4e05c2'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'categories_resources',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('category_id', sa.Integer, nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('resource_id', sa.Integer, nullable=False),
        sa.Column('sort_order', sa.Integer,
                  nullable=False, server_default='100'),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_categories_resources_category_resource',
                    'categories_resources', ['category_id', 'resource_type', 'resource_id'])
    op.create_index('idx_categories_resources_type',
                    'categories_resources', ['resource_type'])


def downgrade() -> None:
    op.drop_table('categories_resources')
